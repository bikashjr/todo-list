import { useCallback, useState } from "react";
import { URLS } from "../constants";
import axios from "axios";
import { useToastContext } from "../contexts/ToastContext";

export default function useApi() {
  const { setShow, setToast } = useToastContext();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const create = async ({ url, payload }) => {
    try {
      setLoading(true);
      const data = await axios.post(url, payload);
      if (data) {
        setShow(true);
        setToast((toast) => {
          return {
            ...toast,
            msg: `${payload.title} created`,
            title: url.includes("todos") ? "Todo Created" : "Subtask Created",
          };
        });
      }
    } catch (e) {
      setError(e);
    } finally {
      await list(URLS.TODOS);
      setLoading(false);
    }
  };

  const list = useCallback(async (url) => {
    try {
      setLoading(true);
      const { data } = await axios(url);
      setData(data.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateStatus = async ({ url, id, payload }) => {
    try {
      const API_URL = url + "/" + id;
      setLoading(true);
      const data = await axios.patch(API_URL, payload);
      if (data) {
        setShow(true);
        setToast((toast) => {
          return {
            ...toast,
            msg: `Status changed to ${payload.status}`,
            title: API_URL.includes("todos")
              ? "Todo Updated"
              : "Subtask Updated",
          };
        });
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      await list(URLS.TODOS);
    }
  };

  const remove = async ({ id, url }) => {
    try {
      const API_URL = url + "/" + id;
      setLoading(true);
      const data = await axios.delete(API_URL);
      if (data) {
        setShow(true);
        setToast((toast) => {
          return {
            ...toast,
            msg: "Deleted Successfully",
            title: API_URL.includes("todos")
              ? "Todo Deleted"
              : "Subtask Deleted",
          };
        });
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      await list(URLS.TODOS);
    }
  };

  return { data, error, loading, create, list, updateStatus, remove };
}
