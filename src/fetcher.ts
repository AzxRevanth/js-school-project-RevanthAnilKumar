import type { Event } from "./types.js";

export async function getData(): Promise<Event[]> {
  const res = await fetch("./events.json");
  const data = await res.json();
  return data as Event[];
}
