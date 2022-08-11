import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

function ProductTable(props){
    const rows = []
    let lastCategory = null

    props.products.forEach((product)=>{
        if(props.inStockOnly && !product.stocked) return

        if(product.name.indexOf(props.filterText) === -1) return   

        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow 
                    category={product.category}
                    key={product.category}
                />
            )
        }
        lastCategory = product.category

     
        rows.push(
            <ProductRow 
                product={product}
                key={product.name}
            />
        )
    })

    
    return (
       <table style={{ border: 'solid 1px green'}}>
            <thead style={{ backgroundColor: 'grey', color: 'white' }}>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
       </table>
    )
}

export default ProductTable