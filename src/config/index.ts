export default {
    hosts: {
        core_service: {
            local: 'http://localhost:4000',
            dev: 'http://dev-core-service.nivapay.com',
            prod: 'https://api-core-service.nivapay.com',
        },
        third_party_service: {
            local: 'http://localhost:3100',
            dev: 'http://dev-api-thirdparty-service.nivapay.com',
            prod: 'https://api-thirdparty-service.nivapay.com',
        },
        user_deposits_service: {
            local: 'http://localhost:5006',
            dev: 'http://dev-api-user-deposits.nivapay.com',
            prod: 'https://api-user-deposits.nivapay.com',
        },
        onramp_service: {
            local: 'http://localhost:6000',
            dev: 'http://dev-ramp-component.nivapay.com',
            prod: 'https://ramp-component.nivapay.com',
        },
        swap_component: {
            local: 'http://localhost:5010',
            dev: 'http://dev-swap-component.nivapay.com',
            prod: 'https://swap-component.nivapay.com',
        },
        dw_component: {
            local: 'http://localhost:5012',
            dev: 'http://dev-dw-component.nivapay.com',
            prod: 'https://dw-component.nivapay.com',
        },
        sc_component: {
            local: 'http://localhost:5014',
            dev: 'http://dev-api-sc-component.nivapay.com',
            prod: 'https://api-sc-component.nivapay.com',
        },
        crypto_component: {
            local: 'http://localhost:5020',
            dev: 'https://dev-api-crypto-component.nivapay.com',
            prod: 'https://api-crypto-component.nivapay.com',
        }
    },
};
