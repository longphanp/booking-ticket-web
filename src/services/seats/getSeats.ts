import axios from "axios";
import configs from "configs";
import Seat from "types/Seat";

export default async function getSeats(areaId: string): Promise<Seat[]> {
  const res = await axios.get(`${configs.endpoint.ticket}/v1/seats`, {
    params: {
      areaId,
    },
  });

  return res?.data?.data;
}
