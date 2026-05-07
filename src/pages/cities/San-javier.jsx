import React from 'react';
import CityPage from '../CityPage';

const SanJavierPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h San Javier - Residencial",
                "description": "Cerrajeros residenciales 24h en San Javier. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "San Javier, Murcia",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-san-javier"
            })}
        </script>
    );
    return <CityPage citySlugOverride="san-javier" extraSEO={extraSEO} />;
};

export default SanJavierPage;
