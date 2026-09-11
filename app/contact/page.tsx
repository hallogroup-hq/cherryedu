'use client';

import { useCherryEdu } from '@/lib/store';
import { DEFAULT_SITE_PAGES } from '@/lib/data/defaultSitePages';
import { SitePageRenderer } from '@/components/SitePageRenderer';

export default function ContactPage() {
  const { sitePages } = useCherryEdu();
  const pageConfig = sitePages?.contact || DEFAULT_SITE_PAGES.contact;

  return (
    <div className="pt-4">
      <SitePageRenderer
        sections={pageConfig.sections}
        fallbackTitle="Kontak & Pusat Bantuan"
      />
    </div>
  );
}
