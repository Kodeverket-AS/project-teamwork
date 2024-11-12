import { createClient } from "next-sanity";
import { useEffect, useState } from "react";
import { SanityData } from '@/types/sanity.types';

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

/**
 * useSanity is a custom hook for fetching data from api.sanity.io, 
 * you can descructure return object to unpack whichever dataset you need from SanityData
 * @returns {SanityData} Object with keys: books, customers, feedback, services and team
 */
export function useSanity() {
  // create a connection with sanity.io
  const client = createClient({ projectId, dataset, apiVersion, useCdn: false });

  // Store data from sanity after a successfull fetch
  const [ data, setData ] = useState<SanityData>({
    books: [],
    customers: [],
    feedback: [],
    services: [],
    team: []
  });

  // Fetch data when client connection has been established
  useEffect(() => {
    if (data) return
    async function getData() {
      try {
        const result = await client.fetch(QUERY)
        setData(result)
      } catch (err) {
        console.log(err)
      }
    }

    getData();
  }, [data, client])

  return { data };
};




