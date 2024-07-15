// app/[slug]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import PageLayout from '../../components/Layout';
import { useEffect } from 'react';

const isDebug = process.env.NEXT_PUBLIC_DEBUG === 'true';

const DynamicPage: React.FC = () => {
  const params = useParams();
  const slug = params?.slug;

  const pageTitle = slug ? (Array.isArray(slug) ? slug[0].replace(/-/g, ' ') : slug.replace(/-/g, ' ')) : '';

  useEffect(() => {
    if (isDebug) {
      console.log("Debug: DynamicPage is rendering");
      console.log(`Debug: Params = ${JSON.stringify(params)}`);
      console.log(`Debug: Slug = ${slug}`);
      console.log(`Debug: Page Title = ${pageTitle}`);
      console.log("Debug: DynamicPage Children are rendered");
    }
  }, [params, slug, pageTitle]);

  return (
    <PageLayout>
      <h1 className="font-heading text-3xl capitalize">{pageTitle}</h1>
      <p className="mt-4">Content for {pageTitle} will be displayed here.</p>
    </PageLayout>
  );
};

export default DynamicPage;
