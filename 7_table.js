let laptops = [
  {
    name: "Macbook Pro",
    brand: "Apple",
  },
  {
    name: "ROG Zephyrus G14",
    brand: "Asus",
  },
  {
    name: "m15 R3",
    brand: "Alienware",
  },
  {
    name: "XPS 13",
    brand: "Dell",
  },
];

console.table(laptops);

console.table(laptops, ['brand']);

const fetch = require("node-fetch");
async function getUsers() {
  let resp = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await resp.json();

  console.table(data, ['name', 'email']);
}
getUsers()