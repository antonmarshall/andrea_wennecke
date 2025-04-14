
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  // In Vite, environment variables need to be prefixed with VITE_
  // Since we don't have that setup, we'll create a token input
  useEffect(() => {
    // Check if token is in localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Set Mapbox token
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [10.686250, 53.868922], // Coordinates for Beckergrube 11, Lübeck
        zoom: 15
      });

      // Add marker
      new mapboxgl.Marker()
        .setLngLat([10.686250, 53.868922])
        .addTo(map.current);
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tokenInput = e.currentTarget.elements.namedItem('token') as HTMLInputElement;
    const token = tokenInput.value.trim();
    if (token) {
      localStorage.setItem('mapbox_token', token);
      setMapboxToken(token);
    }
  };

  if (!mapboxToken) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg h-full">
        <p className="mb-4 text-sm text-gray-700">
          Bitte geben Sie Ihren Mapbox-Token ein, um die Karte anzuzeigen.
        </p>
        <form onSubmit={handleTokenSubmit} className="w-full max-w-md">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="token"
              placeholder="Mapbox Public Token eingeben"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button 
              type="submit" 
              className="px-4 py-2 text-white bg-therapyBlue rounded hover:bg-blue-700 transition-colors"
            >
              Karte anzeigen
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Hinweis: Besuchen Sie <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mapbox.com</a>, um einen Token zu erhalten.
          </p>
        </form>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="w-full h-full" />
  );
};

export default Map;
