import axios from 'axios';
import * as Config from '../../../config';
import { createSCOrderDto, validateSCFunctionalArgsDto } from '../../../dtos/dtos/sc_component';


export async function validateSCFunctionalArgs (env: string, api_key: string, query: validateSCFunctionalArgsDto) {
    const host = Config.default.hosts.sc_component[env];
    const response = await axios.post(
        `${host}/order/validate/functional_args`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function createOrder (env: string, api_key: string, query: createSCOrderDto) {
    const host = Config.default.hosts.sc_component[env];
    const response = await axios.post(
        `${host}/order/create`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function getOrderDetails (env: string, api_key: string, query: {order_id: string}) {
    const host = Config.default.hosts.sc_component[env];
    const response = await axios.get(
        `${host}/order/details/${query.order_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function getOrderStatus (env: string, api_key: string, query: {order_id: string}) {
    const host = Config.default.hosts.sc_component[env];
    const response = await axios.get(
        `${host}/order/status/${query.order_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function updateOrderStatusOnDemand (env: string, api_key: string, query: {order_id: string, status: string}) {
    const host = Config.default.hosts.sc_component[env];
    const response = await axios.patch(
        `${host}/order/status/${query.order_id}/${query.status}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}