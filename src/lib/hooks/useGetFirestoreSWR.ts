// swr を使用してfiresotreからrecipeデータを取得するカスタムフック
import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import useSWRImmutable from 'swr/immutable';

import { db } from '@src/lib/utils/firebase';

const useGetFirestoreSWR = <T>(collectionName: string) => {
  const [data, setData] = useState<T[]>([]);

  const fetcher = async () => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => doc.data() as T);
  };

  const { data: swrData, error } = useSWRImmutable<T[]>(collectionName, fetcher);

  useEffect(() => {
    if (swrData) {
      setData(swrData);
    }
  }, [swrData]);

  return {
    data,
    loading: !error && !data,
    error: error,
  };
};

export default useGetFirestoreSWR;
