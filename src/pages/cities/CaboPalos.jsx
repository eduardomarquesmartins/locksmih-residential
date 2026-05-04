import React from 'react';
import CityPage from '../CityPage';

const CaboPalosPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Cabo de Palos - Residencial",
                "description": "Cerrajeros residenciales 24h en Cabo de Palos. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Cabo de Palos, Murcia",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-cabo-de-palos"
            })}
        </script>
    );
    return <CityPage citySlugOverride="cabo-de-palos" extraSEO={extraSEO} />;
};

export default CaboPalosPage;
