import axios, { AxiosResponse } from 'axios';

export async function getProductIdByName (productName: string): Promise<AxiosResponse<any>> {
    return await axios.get(
        `http://localhost:5004/nivapay/products/id-by-name/${productName}`,
        {
            headers: {
                'x-api-key': this.api_key,
            },
        }
    )
}