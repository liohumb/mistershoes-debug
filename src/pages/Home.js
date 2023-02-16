import React, { Fragment, useState } from 'react'
import ProductList from '../components/ProductList'
import Filters from '../components/Filters'
import Header from '../components/Header'
import tabProducts from '../products'
import Offer from '../components/Offer'

const Home = () => {
    const [products] = useState( tabProducts )

    const [priceFilter, setPriceFilter] = useState( 'all' )
    const [sizeFilter, setSizeFilter] = useState( 'all' )

    const handlePriceFilterChange = ( event ) => {
        setPriceFilter( event.target.value )
    }

    const handleSizeFilterChange = ( event ) => {
        setSizeFilter( Number( event.target.value ) )
    }

    const filteredProducts = products.filter((product) => {
        if (priceFilter === 'all') {
            return true;
        } else if (priceFilter === '50') {
            return product.price < 50;
        } else if (priceFilter === '100') {
            return product.price < 100;
        } else if (priceFilter === 'moreThan100') {
            return product.price >= 100;
        } else {
            return true;
        }
    }).filter((product) => {
        if (sizeFilter === 'all') {
            return true;
        } else {
            return product.sizes.includes(sizeFilter);
        }
    });

    return (
        <Fragment>
            <Header/>
            <main>
                <Offer/>
                <div className="container">
                    <h2>Liste des produits</h2>
                    <Filters priceFilter={priceFilter} sizeFilter={sizeFilter}
                             onPriceFilterChange={( e ) => handlePriceFilterChange( e )}
                             onSizeFilterChange={( e ) => handleSizeFilterChange( e )}/>
                    <ProductList products={filteredProducts}/>
                </div>
            </main>
        </Fragment>
    )
}

export default Home