import React from 'react';
import CityPage from '../CityPage';

const GranAlacantPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Gran Alacant - Residencial",
                "description": "Cerrajeros residenciales 24h en Gran Alacant. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Gran Alacant, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-gran-alacant"
            })}
        </script>
    );
    return <CityPage citySlugOverride="gran-alacant" extraSEO={extraSEO} />;
};

export default GranAlacantPage;
