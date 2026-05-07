import React from 'react';
import CityPage from '../CityPage';

const DayaNuevaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Daya Nueva - Residencial",
                "description": "Cerrajeros residenciales 24h en Daya Nueva. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Daya Nueva, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-daya-nueva"
            })}
        </script>
    );
    return <CityPage citySlugOverride="daya-nueva" extraSEO={extraSEO} />;
};

export default DayaNuevaPage;
