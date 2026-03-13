import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setUsers(data); 
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [url]);

  return { users, loading };
};

export default useFetch;
