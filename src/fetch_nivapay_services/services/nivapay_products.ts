import axios, { AxiosResponse } from 'axios';

export async function getProductIdByName (host: string, api_key: string, query: {productName: string}): Promise<AxiosResponse<any>> {
    return await axios.get(
        `${host}/nivapay/products/id-by-name/${query.productName}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}