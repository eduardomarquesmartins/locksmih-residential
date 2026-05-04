import React from 'react';
import CityPage from '../CityPage';

const SanMiguelPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h San Miguel de Salinas - Residencial",
                "description": "Cerrajeros residenciales 24h en San Miguel de Salinas. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "San Miguel de Salinas, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-san-miguel-de-salinas"
            })}
        </script>
    );
    return <CityPage citySlugOverride="san-miguel-de-salinas" extraSEO={extraSEO} />;
};

export default SanMiguelPage;
