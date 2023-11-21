import { Box } from '@mui/material';
import ProductCategory from '../ProductCategory';
import MyInput from '../Forms/MyInput';
import MyCheckbox from '../Forms/MyCheckbox';
import { useState } from 'react';
import SearchBar from '../SearchBar';

export default function ProductTable({ products }) {
    const indexedProductsByCategory = new Map();

    products.forEach((product) => {
        const { category } = product;

        if (!indexedProductsByCategory.has(category)) {
            indexedProductsByCategory.set(category, []);
        }

        indexedProductsByCategory.get(category).push(product);
    });

    const productLength = indexedProductsByCategory.size;

    const handleSearch = (searchValue) => {
        indexedProductsByCategory.forEach((productsByCategory) => {
            productsByCategory.forEach((product) => {
                product.visible = product.name.toLowerCase().includes(searchValue.toLowerCase());
            });
        });
    };

    // the search bar & product table use this state prop so we set it in the parent component (ie App)

    return (
        <>
            {productLength > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(indexedProductsByCategory).map(([category, productsByCategory]) => (
                            <ProductCategory key={category} products={productsByCategory} categoryName={category} />
                        ))}
                    </tbody>
                </table>
            ) : (
                'Nothing to display'
            )}
        </>
    );
}
