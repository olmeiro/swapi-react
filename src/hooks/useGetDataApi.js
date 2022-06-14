import axios from 'axios';
import { useState, useEffect, useContext } from 'react'
import AppContext from '../context/AppContext';

const useGetDataApi = (API, type) => {
  const { dispatch } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect( () => {
    const getData = async function getData() {
      const response = await axios(API);
      const { data } = response;
      setData(data);
      setLoading(false);
      dispatch({
        action: type,
        payload: data.results
      })
    }
    getData();
  }, []);

  return {data, loading};
}

export default useGetDataApi;

