import { client } from "@/lib/sanity.client";
import { Project } from "@/typings";
import groq from "groq";
import { NextApiRequest, NextApiResponse } from "next";

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await client.fetch(query);

  res.status(200).json({ projects });
}
