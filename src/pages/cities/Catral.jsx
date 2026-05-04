import React from 'react';
import CityPage from '../CityPage';

const CatralPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Catral - Residencial",
                "description": "Cerrajeros residenciales 24h en Catral. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Catral, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-catral"
            })}
        </script>
    );
    return <CityPage citySlugOverride="catral" extraSEO={extraSEO} />;
};

export default CatralPage;
