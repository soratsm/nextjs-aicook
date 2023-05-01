
import { useState } from 'react';

import { collection, addDoc } from 'firebase/firestore';

import { db } from '@src/lib/utils/firebase';

export const usePostFirestore = <T>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const postFirestore = async (data: T[], collectionName: string) => {
    setLoading(true);
    try {
      data.map(async (d) => {
        console.log(d);
        await addDoc(collection(db, collectionName), d);
      });
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return { postFirestore, loading, error };
};

export default usePostFirestore;
