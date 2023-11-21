export default function ProductRow({ product }) {
    return (
        <tr style={{ color: product.stocked ? 'black' : 'red' }}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}
