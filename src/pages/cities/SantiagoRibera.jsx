import React from 'react';
import CityPage from '../CityPage';

const SantiagoRiberaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Santiago de la Ribera - Residencial",
                "description": "Cerrajeros residenciales 24h en Santiago de la Ribera. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Santiago de la Ribera, Murcia",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-santiago-de-la-ribera"
            })}
        </script>
    );
    return <CityPage citySlugOverride="santiago-de-la-ribera" extraSEO={extraSEO} />;
};

export default SantiagoRiberaPage;
