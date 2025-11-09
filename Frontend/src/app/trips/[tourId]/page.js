"use client"
import React, {useState, useEffect} from 'react';
import Header from '../../../components/sections/header';
import ProgressSection from '../../../components/sections/progressSection'
import Map from '../../../components/map-related/map'
import DestinationCard from '../../../components/sections/Destination';
import { AdvancedMarker, Pin, APIProvider} from '@vis.gl/react-google-maps';
import RouteComponent from "../../../components/map-related/RouteComponent";

// Helper function to get pin colors based on position
const getPinColor = (index, totalCount) => {
  if (index === 0) {
    // First destination - green (start)
    return { background: '#22c55e', glyphColor: '#fff', borderColor: '#16a34a' };
  } else if (index === totalCount - 1) {
    // Last destination - red (end)
    return { background: '#ef4444', glyphColor: '#fff', borderColor: '#dc2626' };
  } else {
    // Middle destinations - blue
    return { background: '#3b82f6', glyphColor: '#fff', borderColor: '#2563eb' };
  }
};


function page() {
  const [currentStep, setCurrentStep] = useState(0);

const sampleDestinations = [
  {
    id: 1,
    name: "Café Lumière",
    address: "1250 Collins Ave, Miami Beach, FL 33139",
    lat: 25.7907,
    lng: -80.1300,
    description: "Charming European-style cafe known for its brunch and coffee.",
    rating: 4.6,
    reviewCount: 1250,
    priceLevel: 2,
    category: "Restaurant",
    estimatedTime: "1 hour",
    distance: "0.0 mi",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Lummus Park",
    address: "1130 Ocean Dr, Miami Beach, FL 33139",
    lat: 25.7818,
    lng: -80.1300,
    description: "Iconic beachfront park with palm trees, walking paths, and direct beach access.",
    rating: 4.6,
    reviewCount: 9850,
    priceLevel: 1,
    category: "Park",
    estimatedTime: "1.5 hours",
    distance: "0.2 mi",
    imageUrl: "https://images.unsplash.com/photo-1541633596544-b7f5f403487f?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "The Villa Casa Casuarina",
    address: "1116 Ocean Dr, Miami Beach, FL 33139",
    lat: 25.7820,
    lng: -80.1305,
    description: "The former Versace Mansion, now an opulent luxury hotel and restaurant.",
    rating: 4.5,
    reviewCount: 2100,
    priceLevel: 4,
    category: "Landmark",
    estimatedTime: "15 min",
    distance: "0.2 mi",
    imageUrl: "https://images.unsplash.com/photo-1582290233100-336335f6068a?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Art Deco Welcome Center",
    address: "1001 Ocean Dr, Miami Beach, FL 33139",
    lat: 25.7801,
    lng: -80.1314,
    description: "Starting point for Art Deco walking tours and information on the historic district.",
    rating: 4.4,
    reviewCount: 1350,
    priceLevel: 1,
    category: "Museum",
    estimatedTime: "45 min",
    distance: "0.3 mi",
    imageUrl: "https://images.unsplash.com/photo-1509216242873-7716f446e3a5?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Española Way",
    address: "1450 Washington Ave, Miami Beach, FL 33139",
    lat: 25.7877,
    lng: -80.1331,
    description: "Charming, pedestrian-only street with Mediterranean-style buildings and restaurants.",
    rating: 4.5,
    reviewCount: 5600,
    priceLevel: 3,
    category: "Attraction",
    estimatedTime: "1.5 hours",
    distance: "0.4 mi",
    imageUrl: "https://images.unsplash.com/photo-1620392352876-47b8f01f008c?w=400&h=300&fit=crop"
  }
];

  return (
    <>
    <Header/>
    <div className="flex h-screen">
        <div className="w-1/2 overflow-y-auto pt-8">
            {/*
            <ProgressSection 
            currentStep={currentStep} /> */}
            {sampleDestinations.map((destination) => (
              <div key={destination.id} className="relative px-6 py-1">
                <DestinationCard
                  number={destination.id}

                  {...destination}
                />
              </div>
            ))}
        </div>

        <div className="w-2/3 h-full">
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <Map
              style={{width: '100%', height: '100%'}}
              defaultCenter={{lat: 25.7823, lng: -80.1300}}
              defaultZoom={13}
              gestureHandling={'greedy'}
              disableDefaultUI={false}
              mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
            >

      {sampleDestinations.map((destination, index) => (
        <React.Fragment key={destination.id}>
          {/* Render route from current to next destination (1-2, 2-3, 3-4, etc.) */}
          {index < sampleDestinations.length - 1 && (
            <RouteComponent 
              origin={{ lat: destination.lat, lng: destination.lng }} 
              destination={{ 
                lat: sampleDestinations[index + 1].lat, 
                lng: sampleDestinations[index + 1].lng 
              }} 
            />
          )}
          
          {/* Render marker at each destination */}
          <AdvancedMarker position={{ lat: destination.lat, lng: destination.lng }}>
            <Pin {...getPinColor(index, sampleDestinations.length)}
            glyph={destination.id.toString()} />
          </AdvancedMarker>
        </React.Fragment>
      ))}

            </Map>
          </APIProvider>
        </div>
    </div>
    </>
  )
}

export default page