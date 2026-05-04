import React from 'react';
import CityPage from '../CityPage';

const PilarPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Pilar de la Horadada - Residencial",
                "description": "Cerrajeros residenciales 24h en Pilar de la Horadada. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Pilar de la Horadada, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-pilar-de-la-horadada"
            })}
        </script>
    );
    return <CityPage citySlugOverride="pilar-de-la-horadada" extraSEO={extraSEO} />;
};

export default PilarPage;
