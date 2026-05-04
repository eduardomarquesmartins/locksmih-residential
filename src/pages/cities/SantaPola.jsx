import React from 'react';
import CityPage from '../CityPage';

const SantaPolaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Santa Pola - Residencial",
                "description": "Cerrajeros residenciales 24h en Santa Pola. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Santa Pola, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-santa-pola"
            })}
        </script>
    );
    return <CityPage citySlugOverride="santa-pola" extraSEO={extraSEO} />;
};

export default SantaPolaPage;
