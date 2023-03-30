import { client } from "@/lib/sanity.client";
import { Social } from "@/typings";
import groq from "groq";
import { NextApiRequest, NextApiResponse } from "next";

const query = groq`
    *[_type == "social"]
`;

type Data = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await client.fetch(query);

  res.status(200).json({ socials });
}
