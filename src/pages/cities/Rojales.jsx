import React from 'react';
import CityPage from '../CityPage';

const RojalesPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Rojales - Residencial",
                "description": "Cerrajeros residenciales 24h en Rojales. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Rojales, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-rojales"
            })}
        </script>
    );
    return <CityPage citySlugOverride="rojales" extraSEO={extraSEO} />;
};

export default RojalesPage;
