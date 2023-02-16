import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import { MdDeleteForever } from "react-icons/md";
import "../stylesheets/Cart.scss";

const Cart = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const remove = (index) => {
        products.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(products));
    }

    const listProducts = products.map((item, index) => {
        return (
            <tr>
                <td><img src={`${process.env.PUBLIC_URL}/img/products/${item.image}`} alt="" /></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><MdDeleteForever className="delete" onClick={() => remove(index)} /></td>
            </tr>
        )
    })

    return (
        <Fragment>
            <Header />
            <main>
                <div className="cart">
                    <h1>Mon panier</h1>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nom</th>
                                <th>Prix</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listProducts}
                        </tbody>
                    </table>
                </div>
            </main>
        </Fragment>
    );
};

export default Cart;