import { NftCheckoutOrdersModel } from "./models/nft_checkout_orders.entity";
import { NftCheckoutUserEventsModel } from "./models/nft_checkout_user_events.entity";

const NftCheckout_Entities = [
    NftCheckoutOrdersModel,
    NftCheckoutUserEventsModel
]

export {
    NftCheckoutOrdersModel,
    NftCheckoutUserEventsModel
}

export default NftCheckout_Entities;