import { Client } from "./sanity";

export async function getData() {
  return Client.fetch(`{
    "books": *[_type == 'books'] { ..., "image":image.asset->url},
    "customers": *[_type == 'customers'] { ..., "image": {"url": image.asset->url }},
    "feedback": *[_type == 'feedback'] { ..., "image": {"url": image.asset->url }},
    "services": *[_type == 'services'] { ..., "image":image.asset->url, "alt":image.alt, _id},
    "team": *[_type == 'team'] { ..., "image": {"url": image.asset->url }},
  }`);
}