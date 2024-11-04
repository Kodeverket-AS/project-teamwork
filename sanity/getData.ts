import { Client } from "./sanity";

export async function getData() {
  return Client.fetch(`{
    "services": *[_type == "services"] {title, content, "image":image.asset->url, "alt":image.alt, _id},
  }`);
  //{ cache: "no-cache" }
}
