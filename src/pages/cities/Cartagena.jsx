import React from 'react';
import CityPage from '../CityPage';

const CartagenaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Cartagena - Residencial",
                "description": "Cerrajeros residenciales 24h en Cartagena. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Cartagena, Murcia",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-cartagena"
            })}
        </script>
    );
    return <CityPage citySlugOverride="cartagena" extraSEO={extraSEO} />;
};

export default CartagenaPage;
