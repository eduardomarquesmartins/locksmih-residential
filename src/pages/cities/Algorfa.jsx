import React from 'react';
import CityPage from '../CityPage';

const AlgorfaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Algorfa - Residencial",
                "description": "Cerrajeros residenciales 24h en Algorfa. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Algorfa, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-algorfa"
            })}
        </script>
    );
    return <CityPage citySlugOverride="algorfa" extraSEO={extraSEO} />;
};

export default AlgorfaPage;
