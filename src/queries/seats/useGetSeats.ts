import { useQuery } from "react-query";

import { STALE_TIME } from "constants/api";
import getSeats from "services/seats/getSeats";

export const GET_SEATS = "seats";

export default function useGetSeats(areaId: string) {
  return useQuery([GET_SEATS], () => getSeats(areaId), {
    staleTime: STALE_TIME.FIVE_MINS,
  });
}
