import React from 'react';
import CityPage from '../CityPage';

const LaMangaPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h La Manga - Residencial",
                "description": "Cerrajeros residenciales 24h en La Manga. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "La Manga, Murcia",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-la-manga"
            })}
        </script>
    );
    return <CityPage citySlugOverride="la-manga" extraSEO={extraSEO} />;
};

export default LaMangaPage;
