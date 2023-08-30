import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

export class NivapayServicesFetchService {
    private readonly api_key: string;

    constructor(
        private readonly httpService: HttpService,
    ) {
        this.api_key = "5ab2e703-0aa1-47e5-9174-d53f7186e90d"
    }

    async getProductIdByName(productName: string): Promise<AxiosResponse<any>> {
        return await axios.get(
            `http://localhost:5004/nivapay/products/id-by-name/${productName}`,
            {
                headers: {
                    'x-api-key': this.api_key,
                },
            }
        )
    }
}
