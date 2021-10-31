import { useEffect } from 'react';

export const useTitle = (title: string) => {
  useEffect(() => {
    // @ts-ignore
    document.title = title;
  }, []);
};
