import React from 'react';
import CityPage from '../CityPage';

const GuardamarPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Guardamar del Segura - Residencial",
                "description": "Cerrajeros residenciales 24h en Guardamar del Segura. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Guardamar del Segura, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-guardamar-del-segura"
            })}
        </script>
    );
    return <CityPage citySlugOverride="guardamar-del-segura" extraSEO={extraSEO} />;
};

export default GuardamarPage;
