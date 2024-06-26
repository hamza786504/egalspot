"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/public/logo-icon.png"
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from '@/store/cartSlice';

export default function Cart() {


    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleIncrementQuantity = (item) => {
        dispatch(incrementQuantity(item));
    };

    const handleDecrementQuantity = (item) => {
        dispatch(decrementQuantity(item));
    };



    return (
        <>
            <Header />
            <div className="container max-w-5xl mx-auto mt-10">
                <div className="flex my-10">
                    <div className="w-full md:w-3/4 bg-white px-3 py-10">
                        <div className="flex justify-between border-b pr-10 pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
                        </div>
                        <table className="table-fixed w-full">
                            <thead>
                                <tr>
                                    <th className="w-2/5 text-start">Product Details</th>
                                    <th className="w-1/5 text-center">Quantity</th>
                                    <th className="w-1/5 text-center">Price</th>
                                    <th className="w-1/5 text-center">Total</th>
                                    <th className="w-1/5 text-center"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item.id} className="hover:bg-gray-100">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="w-20">
                                                    <Image className="h-24" style={{ maxWidth: "80px" }} src={logo} alt={item.name} />
                                                </div>
                                                <div className="ml-4">
                                                    <span className="font-bold text-sm">{item.name}</span>
                                                    <span className="text-red-500 text-xs">{item.brand}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="flex items-center">
                                                <button type='button' onClick={() => { handleDecrementQuantity(item) }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                                <input className="mx-2 border text-center w-8" type="text" value={item.quantity} />
                                                <button type="button" onClick={() => { handleIncrementQuantity(item) }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>
                                                </button>

                                            </div>
                                        </td>
                                        <td className="text-center font-semibold">${item.price}</td>
                                        <td className="text-center font-semibold">${item.price * item.quantity}</td>
                                        <td className="text-center">
                                            <button className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => handleRemoveFromCart(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>



                        <Link href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </Link>
                    </div>

                    <div id="summary" className="w-full md:w-1/4 px-3 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items 3</span>
                            <span className="font-semibold text-sm">590$</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div className="pt-10">
                            <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="bg-gray-100 p-2 text-sm w-full" />
                        </div>
                        <button className="mt-3 bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
