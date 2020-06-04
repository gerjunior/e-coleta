import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

import Legend from '../../components/Legend';
import TextInput from '../../components/TextInput';
import SelectInput from '../../components/SelectInput';
import Option from '../../components/SelectInput/Option';

import {
  Container,
  Header,
  Form,
  FieldGroup,
  ItemsGrid,
  Fieldset,
} from './styles';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGEDistrictsResponse {
  id: number;
  nome: string;
}

interface Districts {
  id: number;
  name: string;
}

const CreatePoint: React.FC = () => {
  const history = useHistory();

  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState<string>('0');

  const [districts, setDistricts] = useState<Districts[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('0');

  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  useEffect(() => {
    api.get<Item[]>('items').then(response => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla);

        ufInitials.sort();

        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    axios
      .get<IBGEDistrictsResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/distritos`,
      )
      .then(response => {
        const ufDistricts = response.data.map(district => {
          return { id: district.id, name: district.nome };
        });

        ufDistricts.sort((prev, actual) => {
          if (prev.name < actual.name) {
            return -1;
          }

          return 1;
        });

        setDistricts(ufDistricts);
      });
  }, [selectedUf]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectDistrict(event: ChangeEvent<HTMLSelectElement>) {
    const district = event.target.value;

    setSelectedDistrict(district);
  }

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItems(filteredItems);

      return;
    }

    setSelectedItems([...selectedItems, id]);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (selectedItems.length === 0) {
      alert('Selecione ao menos um item para coleta.');
      return;
    }

    const { name, email, whatsapp } = formData;
    const uf = selectedUf;
    const city = selectedDistrict;
    const [latitude, longitude] = selectedPosition;

    const data = {
      name,
      email,
      whatsapp,
      uf,
      city,
      latitude,
      longitude,
      items: selectedItems,
    };

    await api.post('points', data);

    alert('Ponto de coleta criado!');

    history.push('/');
  }

  return (
    <Container id="page-create-point">
      <Header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </Header>

      <Form onSubmit={handleSubmit}>
        <h1>
          Cadastro de <br /> ponto de coleta
        </h1>

        <Fieldset>
          <Legend title="Dados" />

          <FieldGroup>
            <TextInput
              label="Nome da entidade"
              type="text"
              name="name"
              id="name"
              required
              onChange={handleInputChange}
            />
          </FieldGroup>

          <FieldGroup>
            <TextInput
              label="E-mail"
              type="email"
              name="email"
              id="email"
              required
              onChange={handleInputChange}
            />

            <TextInput
              label="Whatsapp"
              type="text"
              name="whatsapp"
              id="whatsapp"
              required
              onChange={handleInputChange}
            />
          </FieldGroup>
        </Fieldset>

        <Fieldset>
          <Legend title="Endereço" description="Selecione o endereço no mapa" />

          <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selectedPosition} />
          </Map>

          <FieldGroup>
            <SelectInput
              label="Estado (UF)"
              name="uf"
              id="uf"
              value={selectedUf}
              required
              onChange={handleSelectUf}
            >
              <Option value="0" description="Selecione uma UF" />
              {ufs.map(uf => {
                return <Option key={uf} value={uf} description={uf} />;
              })}
            </SelectInput>

            <SelectInput
              label="Cidade"
              name="city"
              id="city"
              value={selectedDistrict}
              required
              onChange={handleSelectDistrict}
            >
              <Option value="0" description="Selecione uma cidade" />
              {districts.map(district => {
                return (
                  <Option
                    key={district.id}
                    value={district.name}
                    description={district.name}
                  />
                );
              })}
            </SelectInput>
          </FieldGroup>
        </Fieldset>

        <Fieldset>
          <Legend
            title="Itens de coleta"
            description="Selecione um ou mais itens abaixo"
          />

          <ItemsGrid>
            {items.map(item => {
              return (
                <li
                  key={item.id}
                  onClick={() => handleSelectItem(item.id)}
                  className={selectedItems.includes(item.id) ? 'selected' : ''}
                >
                  <img src={item.image_url} alt={item.title} />
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ItemsGrid>
        </Fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </Form>
    </Container>
  );
};

export default CreatePoint;
