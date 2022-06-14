import axios from 'axios';
import { useState, useEffect } from 'react'

const useGetDataApi = (API) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect( () => {
    const getData = async function getData() {
      const response = await axios(API);
      const { data } = response;
      setData(data);
      setLoading(false);
    }
    getData();
  }, [API]);

  return {data, loading};
}

export default useGetDataApi;

