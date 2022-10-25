import "leaflet/dist/leaflet.css";

import React, { FormEvent, useState } from "react";
import { MapContainer as Leafletmap, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { v4 as uuidv4 } from "uuid";

import { fetchLocalMapBox } from "./apiMapBox";
import AsyncSelect from "react-select/async";

import mapPin from "./assets/pin.svg";

const VITE_ACCESS_TOKEN_MAP_BOX = import.meta.env.VITE_ACCESS_TOKEN_MAP_BOX; 


const initialPosition = { lat: -16.6446324, lng: -49.416115 };

const mapPinIcon = Leaflet.icon({
  iconUrl: mapPin,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

interface Delivery {
  id: string;
  name: string;
  address: string;
  complement: string;
  latitude: number;
  longitude: number;
  fiscalID: number;
}

type Position = {
  longitude: number;
  latitude: number;
};

function Map() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  const [position, setPosition] = useState<Position | null>(null);

  const [name, setName] = useState("");
  const [complement, setComplement] = useState("");
  const [address, setAddress] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [location, setLocation] = useState(initialPosition);

  const [fiscalID, setFiscalID] = useState(0);

  const loadOptions = async (inputValue: any, callback: any) => {
    const response = await fetchLocalMapBox(inputValue);
    let places: any = [];
    if (inputValue.length < 5) return;
    response.features.map((item: any) => {
      places.push({
        label: item.place_name,
        value: item.place_name,
        coords: item.center,
        place: item.place_name,
      });
    });

    callback(places);
  };

  const handleChangeSelect = (event: any) => {
    setPosition({
      longitude: event.coords[0],
      latitude: event.coords[1],
    });

    setAddress({ label: event.place, value: event.place });

    setLocation({
      lng: event.coords[0],
      lat: event.coords[1],
    });
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!address || !name) return;

    setDeliveries([
      ...deliveries,
      {
        id: uuidv4(),
        name,
        address: address?.value || "",
        complement,
        latitude: location.lat,
        longitude: location.lng,
        fiscalID,
      },
    ]);

    setName("");
    setAddress(null);
    setComplement("");
    setPosition(null);
    setFiscalID(0);
  }

  return (
    <div id="page-map">
      <main>
        <form onSubmit={handleSubmit} className="landing-page-form">
          <fieldset>
            <legend>Pontos da Rota</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                placeholder="Digite o nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="fiscalID">CNPJ/CPF</label>
              <input
                id="fiscalID"
                placeholder="Digite o CNPJ ou CPF"
                value={fiscalID}
                onChange={(event) => setFiscalID(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="address">Endereço</label>
              <AsyncSelect
                placeholder="Digite seu endereço..."
                classNamePrefix="filter"
                //cacheOptions
                loadOptions={loadOptions}
                onChange={handleChangeSelect}
                value={address}
              />
            </div>

            <div className="input-block">
              <label htmlFor="complement">Complemento</label>
              <input
                placeholder="Apto / Nr / Casa..."
                id="complement"
                value={complement}
                onChange={(event) => setComplement(event.target.value)}
              />
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>

      <Leafletmap className="leaflet-container"
        center={location}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${"pk.eyJ1IjoibWFyZ29maSIsImEiOiJja2dhdm5tcmMwOHBnMnJtejA3NXYyMHZwIn0.oL7DRMPMYDab2K6xv8elSA"}`}
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${VITE_ACCESS_TOKEN_MAP_BOX}`}
        />

        {position && (
          <Marker
            icon={mapPinIcon}
            position={[position.latitude, position.longitude]}
          ></Marker>
        )}

        {deliveries.map((delivery) => (
          <Marker
            key={delivery.id}
            icon={mapPinIcon}
            position={[delivery.latitude, delivery.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              <div>
                <h3>{delivery.name}</h3>
                <p>{delivery.fiscalID}</p>
                <p>
                  {delivery.address} - {delivery.complement}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </Leafletmap>
    </div>
  );
}

export default Map;
