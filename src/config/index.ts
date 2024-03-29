export default {
    hosts: {
        core_service: {
            local: 'http://localhost:4000',
            dev: 'http://dev-core-service.nivapay.com',
            stg: 'https://stg-core-service.nivapay.com',
            prod: 'https://api-core-service.nivapay.com',
        },
        third_party_service: {
            local: 'http://localhost:3100',
            dev: 'http://dev-api-thirdparty-service.nivapay.com',
            stg: 'http://stg-api-thirdparty-service.nivapay.com',
            prod: 'https://api-thirdparty-service.nivapay.com',
        },
        user_deposits_service: {
            local: 'http://localhost:5006',
            dev: 'http://dev-api-user-deposits.nivapay.com',
            stg: 'http://stg-api-user-deposits.nivapay.com',
            prod: 'https://api-user-deposits.nivapay.com',
        },
        onramp_component: {
            local: 'http://localhost:6000',
            dev: 'http://dev-ramp-component.nivapay.com',
            stg: 'http://stg-ramp-component.nivapay.com',
            prod: 'https://ramp-component.nivapay.com',
        },
        swap_component: {
            local: 'http://localhost:5010',
            dev: 'http://dev-swap-component.nivapay.com',
            stg: 'http://stg-swap-component.nivapay.com',
            prod: 'https://swap-component.nivapay.com',
        },
        dw_component: {
            local: 'http://localhost:5012',
            dev: 'http://dev-dw-component.nivapay.com',
            stg: 'http://stg-dw-component.nivapay.com',
            prod: 'https://dw-component.nivapay.com',
        },
        sc_component: {
            local: 'http://localhost:5014',
            dev: 'http://dev-api-sc-component.nivapay.com',
            stg: 'http://stg-api-sc-component.nivapay.com',
            prod: 'https://api-sc-component.nivapay.com',
        },
        crypto_component: {
            local: 'http://localhost:5020',
            dev: 'https://dev-api-crypto-component.nivapay.com',
            stg: 'https://stg-api-crypto-component.nivapay.com',
            prod: 'https://api-crypto-component.nivapay.com',
        },
        lambda_functions: {
            get_intercomm_api_key: {
                dev: 'https://9p4qtn6yyk.execute-api.ap-south-1.amazonaws.com/intercomm/api/key',
                stg: 'https://bridiviil1.execute-api.ap-south-1.amazonaws.com/intercomm/api/key',
                prod: 'https://qaiiezehna.execute-api.ap-south-1.amazonaws.com/intercomm/api/key'
            }
        }
    },
};