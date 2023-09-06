'use client';

import { useLayoutEffect, useState } from 'react';

interface IUseMatchMediaProps {
  sizeNames: string[];
  queries: string[];
}

export function useMatchMedia({ sizeNames, queries }: IUseMatchMediaProps) {
  const [queriesList, setQueriesList] = useState<MediaQueryList[]>([]);
  const [matches, setMatches] = useState<boolean[]>([]);

  const result: Record<string, boolean> = {};

  const getMatches = () => queriesList.map((media) => media.matches);
  const handleSetMatches = () => {
    setMatches(getMatches());
  };

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    setQueriesList(queries.map((query) => window.matchMedia(query)));
  }, []);

  useLayoutEffect(() => {
    if (!queriesList.length) return;

    setMatches(getMatches());
  }, [queriesList]);

  useLayoutEffect(() => {
    queriesList.forEach((media) => media.addEventListener('change', handleSetMatches));

    return () => {
      queriesList.forEach((media) => media.removeEventListener('change', handleSetMatches));
    };
  });

  sizeNames.forEach((name, index) => {
    result[name] = matches[index];
  });

  return result;
}
