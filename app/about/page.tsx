'use client';

import React from 'react';
import { useCherryEdu } from '@/lib/store';
import { DEFAULT_SITE_PAGES } from '@/lib/data/defaultSitePages';
import { SitePageRenderer } from '@/components/SitePageRenderer';

export default function AboutPage() {
  const { sitePages } = useCherryEdu();
  const pageConfig = sitePages?.about || DEFAULT_SITE_PAGES.about;

  return (
    <div className="pt-4">
      <SitePageRenderer
        sections={pageConfig.sections}
        fallbackTitle="Tentang Cherry Coffee Roastery"
      />
    </div>
  );
}
