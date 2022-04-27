
import React, { useState, useEffect, SetStateAction, Dispatch } from "react";

export const useData = <T>(
  url: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>, boolean] => {
  const [data, setData] = useState<T>(defaultValue);
  const [is_loading, setLoading]=useState<boolean>(false)

  useEffect(() => {
    if(url){
        setLoading(true)
      fetch(`'https://rickandmortyapi.com/api/${url}`)
        .then((res) => res.json())
        .then((res: { resultCount: number; results: T }) => {
          setData(res.results);
        });
    }
    }, [url]);
  return [data, setData, is_loading];
};