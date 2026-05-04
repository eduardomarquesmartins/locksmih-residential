import React from 'react';
import CityPage from '../CityPage';

const ElAlgarPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h El Algar - Residencial",
                "description": "Cerrajeros residenciales 24h en El Algar. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "El Algar, Murcia",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-el-algar"
            })}
        </script>
    );
    return <CityPage citySlugOverride="el-algar" extraSEO={extraSEO} />;
};

export default ElAlgarPage;
