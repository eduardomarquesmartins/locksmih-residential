import React from 'react';
import CityPage from '../CityPage';

const BenijofarPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Benijófar - Residencial",
                "description": "Cerrajeros residenciales 24h en Benijófar. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Benijófar, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-benijofar"
            })}
        </script>
    );
    return <CityPage citySlugOverride="benijofar" extraSEO={extraSEO} />;
};

export default BenijofarPage;
