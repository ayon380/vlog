// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fs.readFile("blogdata/how-to-learn-JS.json",'utf-8',(err,data)=>{
    console.log(data);
  })
  console.log(res)
  res.status(200).json({ name: 'John Doe' })
}