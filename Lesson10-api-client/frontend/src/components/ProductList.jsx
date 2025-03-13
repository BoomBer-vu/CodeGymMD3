export default function ProductList({productList} ) {
    if(productList.length === 0){
        return <>No data.</>;
    }


    return(
        <>
            <h1>Product List</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>

                <tbody>
                {productList.map((item) =>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
                </tbody>

            </table>
        </>
    )
}