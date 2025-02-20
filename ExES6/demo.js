// Danh sách sản phẩm
let products = [
    { id: 1, name: "Laptop", price: 1500, quantity: 5 },
    { id: 2, name: "Smartphone", price: 800, quantity: 10 },
    { id: 3, name: "Tablet", price: 600, quantity: 7 }
];

// Hiển thị sản phẩm
const displayProducts = (products) => {
    products.map(({ id, name, price, quantity }) =>
        console.log(`ID: ${id}, Name: ${name}, Price: $${price}, Quantity: ${quantity}`)
    );
};
displayProducts(products);

// Tính tổng giá trị hàng tồn kho
const calculateTotalValue = (products) =>
    products.reduce((total, { price, quantity }) => total + price * quantity, 0);
console.log("Total Inventory Value:", calculateTotalValue(products));

// Lọc sản phẩm theo giá
const filterByPrice = (products, minPrice) =>
    products.filter(({ price }) => price >= minPrice);
console.log("Filtered Products:", filterByPrice(products, 700));

// Thêm sản phẩm mới
const addProduct = (products, newProduct) => {
    products.push(newProduct);
};
addProduct(products, { id: 4, name: "Monitor", price: 300, quantity: 8 });
displayProducts(products);

// Xóa sản phẩm theo ID
const removeProductById = (products, id) =>
    products.filter((product) => product.id !== id);
products = removeProductById(products, 2);
displayProducts(products);

// Cập nhật số lượng sản phẩm
const updateQuantity = (products, id, newQuantity) =>
    products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
    );
products = updateQuantity(products, 1, 3);
displayProducts(products);
