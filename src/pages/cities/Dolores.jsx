import React from 'react';
import CityPage from '../CityPage';

const DoloresPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Dolores - Residencial",
                "description": "Cerrajeros residenciales 24h en Dolores. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Dolores, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-dolores"
            })}
        </script>
    );
    return <CityPage citySlugOverride="dolores" extraSEO={extraSEO} />;
};

export default DoloresPage;
