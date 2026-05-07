import React from 'react';
import CityPage from '../CityPage';

const LosAlcazaresPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Los Alcázares - Residencial",
                "description": "Cerrajeros residenciales 24h en Los Alcázares. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Los Alcázares, Murcia",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-los-alcazares"
            })}
        </script>
    );
    return <CityPage citySlugOverride="los-alcazares" extraSEO={extraSEO} />;
};

export default LosAlcazaresPage;
