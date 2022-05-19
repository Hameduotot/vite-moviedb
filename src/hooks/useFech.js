import React, { useEffect, useState } from "react";

function useFech({ url, query, method = "GET" }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function reFech(extraQuery) {
    const newQuery = { ...query, ...extraQuery };
    const queryParams = Object.keys(newQuery).length
      ? new URLSearchParams(newQuery).toString()
      : null;
    fetch(`${url}?${queryParams ? queryParams : ""}`, { method })
      .then((d) => d.json())
      .then(setData)
      .catch(setError)
      .finally(setLoading(false));
  }

  useEffect(() => {
    reFech();
  }, []);
  return { data, loading, error, reFech };
}

export default useFech;
