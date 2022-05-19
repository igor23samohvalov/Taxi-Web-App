import { Box } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import OrderForm from './OrderForm';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuZHlwbGFua3RvbiIsImEiOiJjbDNjcG9sejMwMDB4M2xzN2FzbWZjbXFxIn0.5Tmrz2MUK6cU3N_v1GR6dA';



function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
      });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <Box ref={mapContainer} sx={{ width: 1, height: 0.925, bgcolor: '#eeeee4' }}>
      {/* <OrderForm /> */}
    </Box>
  )
}

export default Map