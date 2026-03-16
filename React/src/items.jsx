import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function Items() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `http://localhost:3001/items/${id}`,
  );

  return (
    <div>
      <h1>Item Page</h1>
      <p>Item ID: {id}</p>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && (
        <div>
          <p>{data.name}</p>
        </div>
      )}
    </div>
  );
}
