//modules
import {
    getUsersFromDB
} from "./users.js";
import getProductsFromDB from "./products.js";
import getUserBasket from "./user-basket.js";

async function main() {
    try {
        // const users = await getUsersFromDB()
        // const products = await getProductsFromDB();
        getUserBasket().then(async result => {
            console.log(result);
        })
    } catch (error) {
        console.error(error)
    }
}
main()