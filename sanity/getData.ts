import { Client } from "./sanity";

export async function getData() {
  return Client.fetch(`{
    "books": *[_type == 'books'] { ..., "image": {"url": image.asset->url, "alt": image.alt }},
    "customers": *[_type == 'customers'] { ..., "image": {"url": image.asset->url, "alt": image.alt }},
    "feedback": *[_type == 'feedback'] { ..., "image": {"url": image.asset->url, "alt": image.alt }},
    "services": *[_type == 'services'] { ..., "image": {"url": image.asset->url, "alt": image.alt }},
    "team": *[_type == 'team'] { ..., "image": {"url": image.asset->url, "alt": image.alt }},
  }`)
};