"use client";
import Footer from '@/components/footer'
import Header from '@/components/header'
import TopProducts from '@/components/productgrid'
import React from 'react'

export default function page({products}) {


    return (
        <>
            <Header />

            <div className="flex px-3 items-start flex-row">

                <div className="space-y-2 w-full md:w-1/4">
                    <details
                        className="overflow-hidden rounded  [&_summary::-webkit-details-marker]:hidden" open={true}
                        
                    >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                        >
                            <span className="text-sm font-medium"> Availability </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </summary>

                        <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700"> 0 Selected </span>

                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                    Reset
                                </button>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                                <li>
                                    <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                        <input type="checkbox" id="FilterInStock" className="size-5 rounded border-gray-300" />

                                        <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                    </label>
                                </li>

                                <li>
                                    <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                        <input type="checkbox" id="FilterPreOrder" className="size-5 rounded border-gray-300" />

                                        <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                    </label>
                                </li>

                                <li>
                                    <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                        <input type="checkbox" id="FilterOutOfStock" className="size-5 rounded border-gray-300" />

                                        <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </details>

                    <details
                        className="overflow-hidden rounded  [&_summary::-webkit-details-marker]:hidden" open={true}
                    >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                        >
                            <span className="text-sm font-medium"> Price </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </summary>

                        <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700"> The highest price is $600 </span>

                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                    Reset
                                </button>
                            </header>

                            <div className="border-t border-gray-200 p-4">
                                <div className="flex justify-between gap-4">
                                    <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">$</span>

                                        <input
                                            type="number"
                                            id="FilterPriceFrom"
                                            placeholder="From"
                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        />
                                    </label>

                                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">$</span>

                                        <input
                                            type="number"
                                            id="FilterPriceTo"
                                            placeholder="To"
                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="main w-full md:w-3/4">
                    <TopProducts products={products} limit={28} sectionName="All Collections" />

                    {/* pagination */}
                    <ul class="my-10 flex space-x-4 justify-end">
                        <li class="flex items-center justify-center shrink-0 bg-gray-300 w-10 h-10 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-gray-400" viewBox="0 0 55.753 55.753">
                                <path
                                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                    data-original="#000000" />
                            </svg>
                        </li>
                        <li
                            class="flex items-center justify-center shrink-0 bg-orange-500 border-2 border-orange-500cursor-pointer text-base font-bold text-white w-10 h-10 rounded-full">
                            1
                        </li>
                        <li
                            class="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-full">
                            2
                        </li>
                        <li
                            class="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-full">
                            3
                        </li>
                        <li
                            class="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-full">
                            4
                        </li>
                        <li class="flex items-center justify-center shrink-0 hover:bg-gray-50 border-2 cursor-pointer w-10 h-10 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
                                <path
                                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                    data-original="#000000" />
                            </svg>
                        </li>
                    </ul>
                </div>



            </div>




            <Footer />
        </>
    )
}




export async function getServerSideProps() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const products = data.products;
      return {
        props: {
          products
        }
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      return {
        props: {
          products: []
        }
      };
    }
  }
  