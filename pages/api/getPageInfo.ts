import { client } from "@/lib/sanity.client";
import { PageInfo } from "@/typings";
import groq from "groq";
import { NextApiRequest, NextApiResponse } from "next";

const query = groq`
    *[_type == "pageInfo"][0]`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await client.fetch(query);

  res.status(200).json({ pageInfo });
}
