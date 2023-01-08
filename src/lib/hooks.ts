import { useState, useEffect } from 'react';

export const useReload = (storageName: string) => {
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const nextUpdate = localStorage.getItem(storageName);
    const timeNow = +new Date();

    if (!nextUpdate) {
      const newNextUpdate = +new Date() + 86400000;
      localStorage.setItem(storageName, `${newNextUpdate}`);
    } else if (timeNow > Number(nextUpdate)) {
      setReload(true);
      localStorage.setItem(storageName, `${timeNow}`);
    }
  }, [storageName]);
  return reload;
};
