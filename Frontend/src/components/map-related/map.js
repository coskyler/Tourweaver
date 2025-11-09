'use client'

import React from 'react'
import { Map as GoogleMap } from '@vis.gl/react-google-maps'

export default function Map({ style, defaultCenter, defaultZoom, mapId, children, ...props }) {
  return (
    <GoogleMap
      mapId={mapId}
      style={style || { width: '100%', height: '100%' }}
      defaultCenter={defaultCenter || { lat: 40.7128, lng: -74.0060 }}
      defaultZoom={defaultZoom || 10}
      gestureHandling='greedy'
      disableDefaultUI={false}
      {...props}
    >
      {children}
    </GoogleMap>
  )
}