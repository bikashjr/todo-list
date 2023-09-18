import { useCallback, useState } from "react";
import axios from "axios";

import { API_SERVER } from "../constants";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = useCallback(async (url) => {
    try {
      setLoading(true);
      const { data } = await axios.get(url);
      setData(data.data);
      setError("");
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  }, []);

  const post = async (url, newData) => {
    try {
      setLoading(true);
      await axios.post(url, newData);
      setError("");
      await fetchData(`${API_SERVER}/todos`);
    } catch (err) {
      setError("Error updating data");
    } finally {
      setLoading(false);
    }
  };

  const update = async (url, id, newData) => {
    try {
      setLoading(true);
      await axios.put(`${url}/${id}`, newData);
      setError("");
      await fetchData(`${API_SERVER}/todos`);
    } catch (err) {
      setError("Error updating data");
    } finally {
      setLoading(false);
    }
  };

  const remove = async (url, id) => {
    try {
      setLoading(true);
      await axios.delete(`${url}/${id}`);
      setError("");
      await fetchData(`${API_SERVER}/todos`);
    } catch (err) {
      setError("Error updating data");
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, fetchData, post, update, remove };
};

export default useApi;
