import { createClient } from "next-sanity";
import { useEffect, useState } from "react";
import { SanityData } from "@/types/sanity.types";

// Import enviroment variables
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// Default queries
const QUERY = `{
  "books": *[_type == 'books'] { ..., "image": {"url": image.asset->url, "alt": image.alt }},
  "customers": *[_type == 'customers'] { ..., "image": {"url": image.asset->url, "alt": image.alt }},
  "feedback": *[_type == 'feedback'] { ..., "image": {"url": image.asset->url, "alt": image.alt }},
  "services": *[_type == 'services'] { ..., "image": {"url": image.asset->url, "alt": image.alt }},
  "team": *[_type == 'team'] { ..., "image": {"url": image.asset->url, "alt": image.alt }},
}`;

// Export sanity hook
export function useSanity() {
  const [data, setData] = useState<SanityData>(null);
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  });

  useEffect(() => {
    if (data) return;
    async function getData() {
      try {
        const result = await client.fetch(QUERY);
        setData(result);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, [data, client]);

  return { data };
}
