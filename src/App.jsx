import { Suspense, lazy, useRef, useState } from 'react';
// import './App.css';
import { Box, Container, CssBaseline } from '@mui/material';
import Tutos from './components/Tutos';
import ProductTable from './components/ProductTable/ProductTable';
import SearchBar from './components/SearchBar';
import UseEffect from './components/Hooks/UseEffect';
import UseMemo from './components/Hooks/UseMemo';
import UseRef from './components/Hooks/UseRef';
import CustomHook from './components/Hooks/CustomHook';
import Memoisation from './components/Memoisation';
import HandleErrors from './components/HandleErrors';
import { ErrorBoundary } from 'react-error-boundary';
import Dumb from './components/Dumb';
import UseReducer from './components/Hooks/UseReducer';
import UseContext from './components/Hooks/UseContext/UseContext';

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

    const [loadLazy, setLoadLazy] = useState(false);
    const handleChangeSelect = (comp) => {
        console.log('changed');
        if (comp === 'lazy') {
            setLoadLazy(true);
            return lazy(() => import('./components/Lazy'));
        } else {
            setLoadLazy(false);
            return <Dumb />;
        }
    };

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
                <hr />
                <Box>
                    <h1>Hooks</h1>
                    <UseEffect />
                    <UseMemo />
                    <UseRef />
                    <CustomHook />
                    <UseReducer />
                    <UseContext />
                </Box>
                <hr />
                <Box>
                    <Memoisation />
                </Box>
                <hr />
                <Box>
                    {/* use Error boundary to not crash app when an error is thrown */}
                    {/* <ErrorBoundary fallback={<p style={{ color: 'red' }}>Something went wrong ...</p>}>
                        <HandleErrors />
                    </ErrorBoundary> */}
                </Box>
                <hr />
                <Box>
                    {/* <p>Choose component lazy loaded :</p>
                    <select name="sel" id="sel" onChange={(e) => handleChangeSelect(e.target.value)}>
                        <option value="lazy">Lazy</option>
                        <option value="dumb">Dumb</option>
                    </select>
                    <Suspense fallback={<p>Loading...</p>}></Suspense> */}
                </Box>
            </Container>
        </CssBaseline>
    );
}
