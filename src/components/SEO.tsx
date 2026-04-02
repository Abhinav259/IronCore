import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  urlPath: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "Iron Core: Elite Gym Workout & Macronutrient Diet Plans", 
  description = "Master hypertrophy training and progressive overload with expert gym workout plans and macronutrient-focused diet guides. Achieve your body transformation with Iron Core.", 
  urlPath, 
  schema 
}) => {
  const baseUrl = 'https://iron-core-neon.vercel.app';
  const fullUrl = `${baseUrl}${urlPath}`;

  return (
    <Helmet>
      <title>{title.includes('Iron Core') ? title : `${title} | Iron Core`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title.includes('Iron Core') ? title : `${title} | Iron Core`} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title.includes('Iron Core') ? title : `${title} | Iron Core`} />
      <meta property="twitter:description" content={description} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
