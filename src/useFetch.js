import { useState, useEffect } from 'react';

export const useFetch = (url, postBody, header) => {
  const isPost = postBody ? true : false;
  header = header || {};

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (postBody === '') {
        return;
      };
      try {
        setInProgress(true);
        const res = isPost ? (
          await fetch(url, {
            method: 'POST',
            headers: header,
            body: postBody
          })
        ) : await fetch(url);
        const result = await res.json();
        if (res.ok) {
          setData(result);
          setError(null);
        } else {
          throw result;
        };
      } catch (error) {
        setError(error);
      } finally {
        setInProgress(false);
      };
    };
    fetchData();
  }, [url, postBody]);

  return { data, error, inProgress };
};
