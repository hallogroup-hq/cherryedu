'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { DirectChatDrawer } from '@/components/DirectChatDrawer';

export const GlobalDirectChat: React.FC = () => {
  const pathname = usePathname();
  const { isDirectChatOpen, setIsDirectChatOpen } = useCherryEdu();

  // Don't show learner chat drawer on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <DirectChatDrawer
      isOpen={isDirectChatOpen}
      onClose={() => setIsDirectChatOpen(false)}
    />
  );
};
