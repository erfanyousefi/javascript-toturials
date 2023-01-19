const products = [
    {id: 1, title: "book1", price: 200},
    {id: 2, title: "shoes", price: 150},
    {id: 3, title: "coat", price: 250},
    {id: 4, title: "laptop", price: 1500},
    {id: 5, title: "monitor 27inch MSI", price: 1200},
]
function getProductsFromDB() {
    return new Promise((resolve, reject) => {
        if(products.length > 0) resolve(products);
        else reject(new Error("not found any products"))
    })
}
export default getProductsFromDB