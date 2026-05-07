import React from 'react';
import CityPage from '../CityPage';

const ElchePage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Elche - Residencial",
                "description": "Cerrajeros residenciales 24h en Elche. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Elche, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-elche"
            })}
        </script>
    );
    return <CityPage citySlugOverride="elche" extraSEO={extraSEO} />;
};

export default ElchePage;
