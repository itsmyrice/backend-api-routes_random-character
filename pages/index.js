import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <div>
      <h2>{data.name}</h2>
      <p>
        <strong>{data.twitter}</strong>
      </p>
      <p>
        <strong>{data.geohash}</strong>
      </p>
    </div>
  );
}
