import Area from "./Area";
import Event from "./Event";

export default interface Ticket {
  _id?: string;
  event: Event;
  area: Area;
  price: number;
  cancellable: boolean;

  createdAt?: string;
  updatedAt?: string;
}
