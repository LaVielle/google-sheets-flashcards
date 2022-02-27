import { sheets } from '@googleapis/sheets';
import { NextApiHandler } from 'next';
import { getToken } from 'next-auth/jwt';

type GoogleSheetApiResponse =
  | {
      data: Record<string, string>[];
    }
  | {
      errorMessage: string;
    };

const getSheetsData: NextApiHandler<GoogleSheetApiResponse> = async (
  req,
  res
) => {
  try {
    const token = await getToken({ req });

    const sheetsClient = sheets('v4');

    const response = await sheetsClient.spreadsheets.values.get({
      spreadsheetId: '1WKsGeNHnLZonPRiaysnAfUL3wNsF_oWnIONojSQ5PhM', // German sentences
      range: 'Sheet1', // sheet name
      access_token: token?.accessToken as string,
    });

    if (!response.data.values?.length) {
      throw new Error('File does not contain translations');
    }
    const [languageHeaders, ...translationTuples] = response.data.values;

    const translations =
      translationTuples.map((translationSet) => {
        const obj: Record<string, string> = {};

        translationSet.forEach((lng, index) => {
          obj[languageHeaders[index]] = lng;
        });

        return obj;
      }) || [];

    res.status(200).json({ data: translations });
  } catch (e) {
    console.log('error', e);
    res.status(500).json({ errorMessage: e as string });
  }
};

export default getSheetsData;
