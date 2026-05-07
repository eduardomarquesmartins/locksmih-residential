import React from 'react';
import CityPage from '../CityPage';

const TorrePachecoPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Torre Pacheco - Residencial",
                "description": "Cerrajeros residenciales 24h en Torre Pacheco. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Torre Pacheco, Murcia",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-torre-pacheco"
            })}
        </script>
    );
    return <CityPage citySlugOverride="torre-pacheco" extraSEO={extraSEO} />;
};

export default TorrePachecoPage;
