import Area from "./Area";

export default interface Seat {
  _id?: string;
  number: number;
  area: Area;
}

export type SeatType = "SELECTED" | "TAKEN" | "AVAILABLE";
