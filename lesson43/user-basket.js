import getProductsFromDB from "./products.js";
import {
    getUsersFromDB
} from "./users.js";

let userBasket = [{
        id: 1,
        productID: 1,
        userID: 2,
        count: 2
    },
    {
        id: 2,
        productID: 2,
        userID: 2,
        count: 3
    },
    {
        id: 3,
        productID: 4,
        userID: 2,
        count: 1
    },
];

function getUserBasket() {
    return new Promise((resolve, reject) => {
        let newUserBasket = null;
        getProductsFromDB().then(products => {
            for (const product of products) {
                newUserBasket = userBasket.map(item => {
                    if (item.productID == product.id) {
                        // item.product = product;
                        Object.assign(item, {product})
                        item.totalPrice = product.price * item.count;
                        getUsersFromDB().then(users => {
                            item.user = users.find(user => user.id == item.userID)
                        })
                    }
                    return item
                })
            }
            resolve(newUserBasket);
        })
    })
}
export default getUserBasket