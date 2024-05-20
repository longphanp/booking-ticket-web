export default interface Event {
  _id?: string;
  name: string;
  description?: string;
  startAt: string;
  endAt: string;

  createdAt?: string;
  updatedAt?: string;
}
