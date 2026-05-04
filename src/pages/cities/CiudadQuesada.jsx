import React from 'react';
import CityPage from '../CityPage';

const CiudadQuesadaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Ciudad Quesada - Residencial",
                "description": "Cerrajeros residenciales 24h en Ciudad Quesada. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Ciudad Quesada, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-ciudad-quesada"
            })}
        </script>
    );
    return <CityPage citySlugOverride="ciudad-quesada" extraSEO={extraSEO} />;
};

export default CiudadQuesadaPage;
