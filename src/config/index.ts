export default {
    hosts:{
        core_service:{
            local: "http://localhost:4000",
            dev: "https://dev-api-core-service.nivapay.com",
            prod: "https://api-core-service.nivapay.com"
        },
        third_party_service:{
            local: "http://localhost:3100",
            dev: "https://dev-api-thirdparty-service.nivapay.com",
            prod: "https://api-thirdparty-service.nivapay.com"
        }
    }
}