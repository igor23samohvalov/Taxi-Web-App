import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Box } from '@mui/material';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuZHlwbGFua3RvbiIsImEiOiJjbDNjcG9sejMwMDB4M2xzN2FzbWZjbXFxIn0.5Tmrz2MUK6cU3N_v1GR6dA';



function Map({ setMap }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(30.32);
  const [lat, setLat] = useState(59.95);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng, lat],
      zoom: zoom
    });
    setMap(map.current);
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
    <Box 
      ref={mapContainer} 
      sx={{ 
        width: 1,
        height: { xs: 1, md: 0.925},
        bgcolor: '#eeeee4' }}
    />
  )
}

Map.propTypes = {
  setMap: PropTypes.func,
}

export default Map