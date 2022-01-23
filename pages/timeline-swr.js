import useSWR from "swr";
import axios from "axios";
const fetcher = async () => {
  const { data } = await axios.get(
    "https://5ecf3f9816017c00165e28cf.mockapi.io/timeline"
  );
  return data;
};
function Timeline() {
  // realtime
  const { data: timelineList, error } = useSWR("Timeline", fetcher);

  if (error) return <div>failed to load</div>;
  if (!timelineList) return <div>loading...</div>;
  return (
    <div>
      hello{" "}
      {timelineList.map((timeline, index) => {
        return <p key={index}>{timeline.name}</p>;
      })}
      !
    </div>
  );
}

export default Timeline;
