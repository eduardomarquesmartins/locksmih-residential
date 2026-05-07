import React from 'react';
import CityPage from '../CityPage';

const TorreviejaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Torrevieja - Residencial",
                "description": "Cerrajeros residenciales 24h en Torrevieja. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Torrevieja, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-torrevieja"
            })}
        </script>
    );
    return <CityPage citySlugOverride="torrevieja" extraSEO={extraSEO} />;
};

export default TorreviejaPage;
