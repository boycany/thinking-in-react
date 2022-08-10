function ProductCategoryRow(props){
    const category = props.category
    return (
        <tr >
            <th colSpan="2" style={{ borderBottom: 'solid 1px grey'}}>
                {category}
            </th>
        </tr>
    )
}

export default ProductCategoryRow