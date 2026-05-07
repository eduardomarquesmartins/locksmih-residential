import React from 'react';
import CityPage from '../CityPage';

const CallosaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Callosa de Segura - Residencial",
                "description": "Cerrajeros residenciales 24h en Callosa de Segura. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Callosa de Segura, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-callosa-de-segura"
            })}
        </script>
    );
    return <CityPage citySlugOverride="callosa-de-segura" extraSEO={extraSEO} />;
};

export default CallosaPage;
