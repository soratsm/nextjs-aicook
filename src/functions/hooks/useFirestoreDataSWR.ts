// swr を使用してfiresotreからrecipeデータを取得するカスタムフック
import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import useSWRImmutable from 'swr/immutable';

import { db } from '@src/commons/utils/firebase';

const useFirestoreDataSWR = <T>(collectionName: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetcher = async () => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => doc.data() as T);
  };

  const { data: swrData, error } = useSWRImmutable<T[]>(collectionName, fetcher);

  useEffect(() => {
    if (swrData) {
      setData(swrData);
      setLoading(false);
    }
  }, [swrData]);

  return {
    data,
    loading: !error && !data,
    error: error,
  };
};

export default useFirestoreDataSWR;
