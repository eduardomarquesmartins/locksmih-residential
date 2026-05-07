import React from 'react';
import CityPage from '../CityPage';

const RedovanPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Redován - Residencial",
                "description": "Cerrajeros residenciales 24h en Redován. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Redován, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-redovan"
            })}
        </script>
    );
    return <CityPage citySlugOverride="redovan" extraSEO={extraSEO} />;
};

export default RedovanPage;
