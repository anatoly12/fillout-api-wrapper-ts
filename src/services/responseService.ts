import axios from 'axios';

const API_KEY: string = process.env.FILLOUT_API_KEY as string;
const BASE_URL: string = 'https://api.fillout.com/v1/api';

export const fetchFilteredResponses = async (formId: string, filters: any): Promise<any> => {
    const url = `${BASE_URL}/forms/${formId}/submissions`;
    const headers = { Authorization: `Bearer ${API_KEY}` };
    // Fetch responses from Fillout.com
    const response = await axios.get(url, { headers });
    const data = response.data;

    return data;
};
