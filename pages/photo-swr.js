
import useSWR from "swr";
import axios from "axios";
const fetcher = async () => {
  const { data } = await axios.get('https://5ecf3f9816017c00165e28cf.mockapi.io/timeline');
  return data;
};
function Photo() {
  // realtime
  const { data, error } = useSWR("/photo", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.length}!</div>;
}

export default Photo;
