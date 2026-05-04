import React from 'react';
import CityPage from '../CityPage';

const OrihuelaCostaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Orihuela Costa - Residencial",
                "description": "Cerrajeros residenciales 24h en Orihuela Costa. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Orihuela Costa, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-orihuela-costa"
            })}
        </script>
    );
    return <CityPage citySlugOverride="orihuela-costa" extraSEO={extraSEO} />;
};

export default OrihuelaCostaPage;
