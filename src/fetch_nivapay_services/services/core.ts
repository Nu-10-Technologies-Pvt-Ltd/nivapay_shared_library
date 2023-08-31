import axios, { AxiosResponse } from 'axios';
import * as Config from '../../config'

export async function getInterComApiKey (env: string): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    console.log(host)
    return await axios.get(
        `${host}/aws/intercomm/apikey`
    )
}