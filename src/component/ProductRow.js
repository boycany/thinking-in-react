function ProductRow(props){
    const product = props.product
    const name = product.stocked ? product.name 
                                 : <span style={{ color: 'red' }}>
                                    { product.name }
                                 </span>
    return (
        <tr>
            <td style={{ padding: '0 10px'}}>{ name }</td>
            <td style={{ padding: '0 10px'}}>{ product.price }</td>
        </tr>
    )
}

export default ProductRow