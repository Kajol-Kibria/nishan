// 'use client'

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
// import L from 'leaflet'
// import { useEffect } from 'react'

// // Fix for default marker icon in leaflet (to avoid missing image icon issue)
// if (typeof window !== "undefined" && L && L.Icon && L.Icon.Default) {
//     delete L.Icon.Default.prototype._getIconUrl;
//     L.Icon.Default.mergeOptions({
//         iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
//         iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
//         shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png'
//     });
// }

// export default function Map() {
//     // Update these values to your actual location and address if needed
//     const center = { lat: 23.7937, lng: 90.4471 }
//     const zoom = 13
//     const address = "Dhaka International University, Satarkul, Badda, Dhaka-1212, Bangladesh"

//     // Optionally, effect to ensure leaflet styles on mount
//     useEffect(() => {
//         // no-op, needed to ensure client-side only
//     }, [])

//     return (
//         <div className="w-full h-80 rounded-2xl overflow-hidden" style={{ minHeight: 184 }}>
//             <MapContainer
//                 center={[center.lat, center.lng]}
//                 zoom={zoom}
//                 scrollWheelZoom={false}
//                 style={{ width: '100%', height: '100%' }}
//                 dragging={false}
//                 doubleClickZoom={false}
//                 touchZoom={false}
//                 zoomControl={false}
//                 attributionControl={false}
//                 className="w-full h-full"
//             >
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={[center.lat, center.lng]}>
//                     <Popup>
//                         {address}
//                     </Popup>
//                 </Marker>
//             </MapContainer>
//         </div>
//     )
// }
