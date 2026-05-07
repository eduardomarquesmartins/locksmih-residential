import React from 'react';
import CityPage from '../CityPage';

const FormenteraPage = () => {
    const extraSEO = (
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Locksmith 24h Formentera del Segura - Residencial",
                "description": "Cerrajeros residenciales 24h en Formentera del Segura. Especialistas en apertura de puertas, cambio de cerraduras y seguridad del hogar.",
                "areaServed": "Formentera del Segura, Alicante",
                "telephone": "+34602659054",
                "url": "https://residencial.locksmith24h.es/cerrajero-formentera-del-segura"
            })}
        </script>
    );
    return <CityPage citySlugOverride="formentera-del-segura" extraSEO={extraSEO} />;
};

export default FormenteraPage;
