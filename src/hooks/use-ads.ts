'use client';

import { useState, useEffect } from 'react';

export interface Ad {
  id: string;
  title: string;
  imageUrl: string;
  linkUrl: string;
  position: string;
  active: boolean;
}

export function useAds() {
  const [ads, setAds] = useState<Ad[]>([]);
  
  useEffect(() => {
    // بيانات تجريبية مؤقتة
    setAds([
      {
        id: '1',
        title: 'إعلان تجريبي',
        imageUrl: '',
        linkUrl: '#',
        position: 'sidebar',
        active: true
      }
    ]);
  }, []);
  
  const addAd = (ad: Omit<Ad, 'id'>) => {
    const newAd = { ...ad, id: Date.now().toString() };
    setAds(prev => [...prev, newAd]);
  };
  
  const updateAd = (id: string, ad: Partial<Ad>) => {
    setAds(prev => prev.map(a => a.id === id ? { ...a, ...ad } : a));
  };
  
  const deleteAd = (id: string) => {
    setAds(prev => prev.filter(a => a.id !== id));
  };
  
  return { ads, addAd, updateAd, deleteAd };
}

