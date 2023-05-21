import { collection, doc,getDoc, getDocs } from 'firebase/firestore';

import { db } from '@src/lib/utils/firebase';

export const fetcher = async <T>(collectionName: string): Promise<T[]> => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...(doc.data() as T),
    };
  });
  return data;
};
export const fetcherForId = async <T>(collectionName: string, docId: string): Promise<T> => {
  const data = await getDoc(doc(collection(db, collectionName), docId));
  if (data.exists()) {
    return {
      id: data.id,
      ...(data.data() as T),
    };
  } else {
    throw new Error(`Document with id ${docId} does not exist in collection ${collectionName}.`);
  }
};
