import React from 'react';
import CityPage from '../CityPage';

const GranjaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Granja de Rocamora - Residencial",
                "description": "Cerrajeros residenciales 24h en Granja de Rocamora. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Granja de Rocamora, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-granja-de-rocamora"
            })}
        </script>
    );
    return <CityPage citySlugOverride="granja-de-rocamora" extraSEO={extraSEO} />;
};

export default GranjaPage;
