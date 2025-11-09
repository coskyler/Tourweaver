'use client';

import React, { useRef, useEffect } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';

export default function PlaceAutocomplete({ onPlaceSelect, className }) {
  const inputRef = useRef(null);
  const places = useMapsLibrary('places');
  const autocomplete = useRef(null);

  useEffect(() => {
    if (!places || !inputRef.current) {
      return;
    }

    const options = {
      fields: ['geometry', 'name', 'formatted_address', 'address_components']
    };

    autocomplete.current = new places.Autocomplete(inputRef.current, options);

    autocomplete.current.addListener('place_changed', () => {
      const place = autocomplete.current.getPlace();

      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        let city = '';
        if (place.address_components) {
          for (const component of place.address_components) {
            if (component.types.includes('locality')) {
              city = component.long_name;
              break;
            }
          }
        }
        if (onPlaceSelect) {
          onPlaceSelect({ lat, lng, city });
        }
      }
    });

  }, [places, onPlaceSelect]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Enter a location"
      className={`${className} pac-input`}
    />
  );
}
