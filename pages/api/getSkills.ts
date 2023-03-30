import { client } from "@/lib/sanity.client";
import { Skill } from "@/typings";
import groq from "groq";
import { NextApiRequest, NextApiResponse } from "next";

const query = groq`
    *[_type == "skill"]
`;

type Data = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = await client.fetch(query);

  res.status(200).json({ skills });
}
