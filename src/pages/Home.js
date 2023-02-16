import React, { Fragment, useState } from 'react'
import ProductList from '../components/ProductList'
import Filters from '../components/Filters'
import Header from '../components/Header'
import tabProducts from '../products'
import { MdContentCopy } from 'react-icons/md'
import Offer from '../components/Offer'

const Home = () => {
    const [products, setProducts] = useState( tabProducts )

    const [priceFilter, setPriceFilter] = useState( 'all' )
    const [sizeFilter, setSizeFilter] = useState( 'all' )

    const handlePriceFilterChange = ( event ) => {
        setPriceFilter( event.target.value )
    }

    const handleSizeFilterChange = ( event ) => {
        setSizeFilter( Number( event.target.value ) )
    }

    // Corection de l'erreur "Expected an assignment or function call and instead saw an expression"
    const filteredProducts = products.filter(product => {
        return (priceFilter !== 'all') ? product.price <= priceFilter : true;
    });

    return (
        <Fragment>
            <Header/>
            <main>
                <Offer/>
                <div className="container">
                    <h2>Liste des produits</h2>
                    <Filters onPriceFilterChange={( e ) => handlePriceFilterChange( e )}
                             onSizeFilterChange={( e ) => handleSizeFilterChange( e )}/>
                    <ProductList products={filteredProducts}/>
                </div>
            </main>
        </Fragment>
    )
}

export default Home