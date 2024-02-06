import axios from 'axios';
import {useEffect, useState} from 'react';

const useFetch = (endpoint: string, query: Object) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      'X-RapidAPI-Key': process.env.Rapid_Api_Key,
      'X-RapidAPI-Host': process.env.Rapid_Api_Host,
    },
  };
  const fetchData = async () => {
    try {
      setloading(true);
      const res = await axios.request(options);
      setdata(res.data.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      // alert("Error");
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    fetchData();
  };
  return {data, refetch, loading};
};

export default useFetch;
