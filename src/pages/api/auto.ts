// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import type {AutoComplete,Forecast} from  "../../../utils/types/index"

import Axios from 'axios'



export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  

  res.status(200).json({name:'ok'})
}
