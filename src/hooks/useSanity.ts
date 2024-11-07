import { createClient } from "next-sanity";
import { useEffect, useState } from "react";
import { SanityData } from '@/types/sanity.types';

// Import enviroment variables
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// Default queries
const queries = {
  "books": "*[_type == 'books'] { 'image':image.asset->url, ... }",
  "customers": "*[_type == 'customers'] { 'image':image.asset->url, ... }",
  "feedback": "*[_type == 'feedback'] { 'image':image.asset->url, ... }",
  "services": "*[_type == 'services'] { 'image':image.asset->url, ... }",
  "team": "*[_type == 'team'] { 'image':image.asset->url, ... }",
};

// Export sanity hook
export function useSanity() {
  const [ data, setData ] = useState<SanityData>(null);
  const client = createClient({ projectId, dataset, apiVersion, useCdn: false });

  useEffect(() => {
    if (data) return
    async function getData() {
      console.log("fetched")
      setData(await client.fetch(JSON.stringify(queries)));
    }

    getData();
  }, [data, client])

  return { data };
};




