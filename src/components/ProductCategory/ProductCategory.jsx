import ProductRow from '../ProductRow';

export default function ProductCategory({ products, categoryName }) {
    return (
        <>
            <tr style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>
                <td colSpan={3}>{categoryName}</td>
            </tr>

            {products.length > 0
                ? products.map((product) => <ProductRow key={product.id} product={product} />)
                : 'No product in this category'}
        </>
    );
}
