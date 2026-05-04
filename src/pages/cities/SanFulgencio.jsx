import React from 'react';
import CityPage from '../CityPage';

const SanFulgencioPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h San Fulgencio - Residencial",
                "description": "Cerrajeros residenciales 24h en San Fulgencio. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "San Fulgencio, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-san-fulgencio"
            })}
        </script>
    );
    return <CityPage citySlugOverride="san-fulgencio" extraSEO={extraSEO} />;
};

export default SanFulgencioPage;
