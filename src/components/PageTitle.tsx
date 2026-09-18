import React, { useEffect } from 'react';
import { PageRoute } from '../types';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'INSANE SENSI | Free Fire Pro Sensitivity & Headshot Settings',
  '/premium': 'INSANE SENSI Premium (₹399) | Free Fire Headshot Settings | INSANE SENSI',
  '/free': 'Free Sensi & Config Download | Free Fire Sensitivity | INSANE SENSI',
};

interface PageTitleProps {
  currentRoute: PageRoute;
}

export const PageTitle: React.FC<PageTitleProps> = ({ currentRoute }) => {
  useEffect(() => {
    const title = ROUTE_TITLES[currentRoute] || '404 - Page Not Found | INSANE SENSI';
    document.title = title;
  }, [currentRoute]);

  return null;
};
