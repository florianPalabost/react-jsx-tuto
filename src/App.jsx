import { useState } from 'react';
// import './App.css';
import { Box, Container, CssBaseline } from '@mui/material';
import Tutos from './components/Tutos';
import ProductTable from './components/ProductTable/ProductTable';
import SearchBar from './components/SearchBar';

export default function App() {
    const products = [
        {
            id: 1,
            category: 'Fruits',
            name: 'Apple',
            price: 10,
            stocked: true
        },
        {
            id: 2,
            category: 'Fruits',
            name: 'Banana',
            price: 15,
            stocked: true
        },
        {
            id: 3,
            category: 'Fruits',
            name: 'Orange',
            price: 20,
            stocked: false
        },
        {
            id: 4,
            category: 'Vegetables',
            name: 'Carrot',
            price: 5,
            stocked: true
        },
        {
            id: 5,
            category: 'Vegetables',
            name: 'Broccoli',
            price: 15,
            stocked: false
        },
        {
            id: 6,
            category: 'Vegetables',
            name: 'Asparagus',
            price: 10,
            stocked: true
        }
    ];

    const [showOnlyInStock, setShowOnlyInStock] = useState(false);
    const [search, setSearch] = useState('');

    const visibleProducts = products.filter((product) => {
        if (showOnlyInStock && !product.stocked) {
            return false;
        }

        if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
            return false;
        }

        return true;
    });
    return (
        <CssBaseline>
            <Container>
                <Box>
                    <h1>TUTO</h1>
                    <Tutos />
                </Box>
                <hr />
                <Box>
                    <h1>TP React : product list</h1>
                    <SearchBar
                        showOnlyInStock={showOnlyInStock}
                        onStockOnlyChange={setShowOnlyInStock}
                        searchValue={search}
                        onSearchChange={setSearch}
                    />
                    <ProductTable products={visibleProducts} />
                </Box>
            </Container>
        </CssBaseline>
    );
}
