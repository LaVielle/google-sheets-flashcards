import { NextApiHandler } from 'next';
import { getToken } from 'next-auth/jwt';

type GoogleSheetApiResponse = {
  something: string;
};

const getSheetsData: NextApiHandler<GoogleSheetApiResponse> = async (
  req,
  res
) => {
  const token = await getToken({
    req,
    secret: process.env.GFS_SECRET,
  });

  res.status(200).json({ something: 'durite' });
};

export default getSheetsData;
