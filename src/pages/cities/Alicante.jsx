import React from 'react';
import CityPage from '../CityPage';

const AlicantePage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Alicante",
                "description": "Cerrajeros residenciales en Alicante capital. Apertura de puertas, cambio de cerraduras y urgencias 24h.",
                "areaServed": "Alicante, Costa Blanca",
                "telephone": "+34602659054",
                "url": "https://cerrajeros-alicante.es/cerrajero-alicante"
            })}
        </script>
    );
    return <CityPage citySlugOverride="alicante" extraSEO={extraSEO} />;
};

export default AlicantePage;
