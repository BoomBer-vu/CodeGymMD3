import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from "./components/ProductList";

function App() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        //fetch return Promise => Loi hua => tra ra 2 trang thai co du lieu hoac khong
        //.then(): thanh cong
        //.catch(): that bai

        fetch(" http://localhost:3004/products?expand=categoryId")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <ProductList productList={products}/>
    )
}

export default App
