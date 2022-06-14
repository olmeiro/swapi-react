import axios from 'axios';
import { useState, useEffect } from 'react'
// import AppContext from '../context/AppContext';

const useGetDetails = (API, type) => {
  // const { dispatch } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Promise.all(urls.map(u => fetch(u))).then(responses =>
  //   Promise.all(responses.map(res => res.text()))
  // ).then(texts => {
  // }
  
  useEffect(() => {
    const getData = async function getData() {
      const response = await axios(API);
      const { data } = response;
      setData(data);
      setLoading(false);
      // dispatch({
      //   action: type,
      //   payload: data.results
      // })
    }
    getData();
  }, []);

  return { data, loading };
}

export default useGetDetails;

