import React from 'react';
import CityPage from '../CityPage';

const SanPedroPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h San Pedro del Pinatar - Residencial",
                "description": "Cerrajeros residenciales 24h en San Pedro del Pinatar. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "San Pedro del Pinatar, Murcia",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-san-pedro-del-pinatar"
            })}
        </script>
    );
    return <CityPage citySlugOverride="san-pedro-del-pinatar" extraSEO={extraSEO} />;
};

export default SanPedroPage;
