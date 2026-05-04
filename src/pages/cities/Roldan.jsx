import React from 'react';
import CityPage from '../CityPage';

const RoldanPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Roldán - Residencial",
                "description": "Cerrajeros residenciales 24h en Roldán. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Roldán, Murcia",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-roldan"
            })}
        </script>
    );
    return <CityPage citySlugOverride="roldan" extraSEO={extraSEO} />;
};

export default RoldanPage;
