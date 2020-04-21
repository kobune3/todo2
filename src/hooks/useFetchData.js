import { useEffect, useState } from 'react';
import http from '../http';

export default function useFetchData(path, initial) {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    const fetchData = async () => {
      const result = await http.get(path);
      setValue(result.data);
    };
    fetchData().catch(error => console.log(error));
  }, [path]);

  return [value]
}
