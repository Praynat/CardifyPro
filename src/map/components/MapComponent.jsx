import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { Typography } from '@mui/material';
import L from 'leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { renderToString } from 'react-dom/server';

const iconMarkup = renderToString(<LocationOnIcon style={{ color: 'red', fontSize: '2rem' }} />);
const customIcon = new L.DivIcon({
  html: iconMarkup,
  className: 'custom-div-icon',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24]
});

const MapComponent = ({ address }) => {
  const defaultCoordinates = { lat: 31.7683, lng: 35.2137 }; // Default coordinates for Jerusalem
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: `${address.houseNumber} ${address.street}, ${address.city}, ${address.country}`,
            format: 'json',
          },
        });

        if (response.data.length > 0) {
          setCoordinates({
            lat: parseFloat(response.data[0].lat),
            lng: parseFloat(response.data[0].lon),
          });
        }
      } catch (err) {
        console.error('Error fetching coordinates:', err);
      } finally {
        setIsLoaded(true);
      }
    };

    getCoordinates();
  }, [address]);

  return (
    isLoaded ? (
      <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
       <Marker position={[coordinates.lat, coordinates.lng]} icon={customIcon}>

          <Popup>
            {coordinates === defaultCoordinates
              ? 'Default Location: Jerusalem'
              : `${address.houseNumber} ${address.street}, ${address.city}, ${address.country}`}
          </Popup>
        </Marker>
      </MapContainer>
    ) : (
        <Typography variant="h6" sx={{color:"white"}}>
        Loading Map...
      </Typography>
    )
  );
};

export default MapComponent;
