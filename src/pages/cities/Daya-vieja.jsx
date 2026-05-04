import React from 'react';
import CityPage from '../CityPage';

const DayaViejaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Daya Vieja - Residencial",
                "description": "Cerrajeros residenciales 24h en Daya Vieja. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Daya Vieja, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-daya-vieja"
            })}
        </script>
    );
    return <CityPage citySlugOverride="daya-vieja" extraSEO={extraSEO} />;
};

export default DayaViejaPage;
