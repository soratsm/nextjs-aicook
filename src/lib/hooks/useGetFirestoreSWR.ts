// // swr を使用してfiresotreからrecipeデータを取得するカスタムフック
// import { useEffect, useState } from 'react';

// import { collection, getDocs } from 'firebase/firestore';
// import useSWRImmutable from 'swr/immutable';

// import { db } from '@src/lib/utils/firebase';

// const useGetFirestoreSWR = <T>(collectionName: string) => {
//   const [data, setData] = useState<T[]>([]);

//   const fetcher = async () => {
//     const querySnapshot = await getDocs(collection(db, collectionName));
//     return querySnapshot.docs.map((doc) => doc.data() as T);
//   };

//   const { data: swrData, error } = useSWRImmutable<T[]>(collectionName, fetcher);

//   useEffect(() => {
//     if (swrData) {
//       setData(swrData);
//     }
//   }, [swrData]);

//   return {
//     data,
//     loading: !error && !data,
//     error: error,
//   };
// };

// export default useGetFirestoreSWR;


  /**
  上記のカスタムフックを、以下のような3つのfunctionをreturnするように修正する。
    * 一覧情報取得:GetStaticProps（recipes/index.tsxでの呼び出し）
      * 取得項目：<T>の一部項目
      * function：  const getSimpleLists = async () => {
    * 動的ページのURL取得:GetStaticPaths（recipes/[id].tsxでの呼び出し）
      * 取得項目：<T>のid
      * function：  const getAllIds = async () => {
    * 動的ページに表示する情報取得:GetStaticProps（recipes/[id].tsxでの呼び出し）
      * 取得項目：collectionNameの全項目
      * function：  const getAllData = async () => {

  カスタムフックの定義
  const useGetFirestoreSWR = async (): Promise<T>(collectionName: string) => {
  返却値の定義
  return { getSimpleLists, getAllIds, getAllData };
  */

// Path: src\lib\hooks\useGetFirestoreSWR.ts
import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import useSWRImmutable from 'swr/immutable';

import { db } from '@src/lib/utils/firebase';

const useGetFirestoreSWR = <T>(collectionName: string) => {
  const [data, setData] = useState<T[]>([]);
  const [ids, setIds] = useState<string[]>([]);
  const [simpleLists, setSimpleLists] = useState<T[]>([]);
  const [simpleListsLoading, setSimpleListsLoading] = useState<boolean>(true);
  const [simpleListsError, setSimpleListsError] = useState<boolean>(false);

  const fetcher = async () => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => doc.data() as T);
  }

  const { data: swrData, error } = useSWRImmutable<T[]>(collectionName, fetcher);

  useEffect(() => {
    if (swrData) {
      setData(swrData);
    }
  }
    , [swrData]);

  const getSimpleLists = async () => {
    try {
      setSimpleListsLoading(true);
      const querySnapshot = await getDocs(collection(db, collectionName));
      const simpleLists = querySnapshot.docs.map((doc) => doc.data() as T);
      setSimpleLists(simpleLists);
    } catch (error) {
      setSimpleListsError(true);
    } finally {
      setSimpleListsLoading(false);
    }
  }

  const getAllIds = async () => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const ids = querySnapshot.docs.map((doc) => doc.id);
    setIds(ids);
  }

  const getAllData = async () => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => doc.data() as T);
    setData(data);
  }

  return {
    data,
    ids,
    simpleLists,
    simpleListsLoading,
    simpleListsError,
    getSimpleLists,
    getAllIds,
    getAllData,
    error: error,
  };
};

export default useGetFirestoreSWR;
