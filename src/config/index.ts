export default {
    hosts: {
        core_service: {
            local: "http://localhost:4000",
            dev: "http://dev-api-core-service.nivapay.com",
            prod: "https://api-core-service.nivapay.com"
        },
        third_party_service: {
            local: "http://localhost:3100",
            dev: "http://dev-api-thirdparty-service.nivapay.com",
            // dev: "http://nivapay-main-api-lb2-77118926.us-east-1.elb.amazonaws.com:5004",
            prod: "https://api-thirdparty-service.nivapay.com"
        }
    }
}