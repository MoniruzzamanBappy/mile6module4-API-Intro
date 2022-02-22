const user = { name: 'Gorib Amir', id: 123, job: 'Actor' }
console.log(user);
const stringify = JSON.stringify(user);
console.log(stringify);

const shop = {
    name: 'Alia Store',
    address: 'Dhaka',
    product: ['leptop', 'mobile', '7UP'],
    isExpersive: true,
    employee: {
        number: 10,
        designation: 'sales person',
        salary: 10000
    }
}
const shopStringify = JSON.stringify(shop);
console.log(shop);
console.log(shopStringify);
const covertToObject = JSON.parse(shopStringify);
console.log(covertToObject);