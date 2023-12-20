import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading, error, mutate } = useSWR("/api/random-character", fetcher);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error</h2>;
  }
  return (
    <div>
      <h1>Random Character</h1>
      <h3>Name: {data.name}</h3>
      <p>
        <strong>Age: {data.age}</strong>
      </p>
      <p>
        <strong>Birthday: {data.birthday}</strong>
      </p>
      <p>
        <strong>Twitter: {data.twitter}</strong>
      </p>
      <p>
        <strong>Geohash: {data.geohash}</strong>
      </p>
      <div>
        <button onClick={() => mutate()}>random</button>
      </div>
    </div>
  );
}
