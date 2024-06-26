"use client";
import Loading from '../components/loading';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';



export default function Products({ products }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedProductsId, setSelectedProductsId] = useState([]);

  const toggleSidebarMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  useEffect(() => {
    let filteredProducts;
    if (filter === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter(product => product.status === filter);
    }

    setAllProducts(filteredProducts);
  }, [filter, products]);

  const toggleProductSelection = (productId) => {
    if (selectedProductsId.includes(productId)) {
      setSelectedProductsId(selectedProductsId.filter(id => id !== productId));
    } else {
      setSelectedProductsId([...selectedProductsId, productId]);
    }
  };

  const toggleAllProductsSelection = () => {
    if (selectedProductsId.length === allProducts.length) {
      setSelectedProductsId([]);
    } else {
      const productIds = allProducts.map(product => product._id);
      setSelectedProductsId(productIds);
    }
  };
  const deleteSelectedProducts = async () => {
    if (selectedProductsId.length > 0) {
      try {
        const apiUrl = `http://localhost:3000/api/admin/product/delete/deleteProducts`;
        const response = await axios.delete(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
          data: { ids: selectedProductsId }, // Pass data as the 'data' property in Axios for DELETE request
        });
  
        if (response.status === 200) {
          // Assuming your backend responds with status 200 even on success, you can check response.data for details
          const { message } = response.data;
          const updatedProducts = allProducts.filter(product => !selectedProductsId.includes(product._id));
          setAllProducts(updatedProducts);
          setSelectedProductsId([]); // Clear selected products after deletion
          console.log(message); // Log success message
        } else {
          console.error('Delete operation failed:', response.data.error);
        }
      } catch (error) {
        console.error('Error deleting products:', error.message);
        // Handle error state
      }
    }
  };



  return (
    <>
      <div className="flex h-screen overflow-y-hidden bg-white">

        <Loading />
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebarMenu={toggleSidebarMenu} />

        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <Header isSidebarOpen={isSidebarOpen} toggleSidebarMenu={toggleSidebarMenu} />
          <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
            {/* Main content header */}
            <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
              <h1 className="text-2xl font-semibold whitespace-nowrap">Products</h1>
              <div className="flex-1 justify-end flex space-x-2">
                <button type='button'
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center justify-center px-4 py-2 space-x-1 border-red-500 text-red-500 border rounded-md shadow hover:bg-red-500 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className='size-4 text-sm me-1' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  </svg>Bulk Import
                </button>
                {showModal ? (
                  <>
                    <div
                      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              Import CSV file to import products
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <label for="productsImport"
                              className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
                                <path
                                  d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                  data-original="#000000" />
                                <path
                                  d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                  data-original="#000000" />
                              </svg>
                              Upload CSV file

                              <input type="file" id='productsImport' className="hidden" />
                              <p className="text-xs font-medium text-gray-400 mt-2">Only CSV file is allowed</p>
                            </label>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Import
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
                <Link
                  href="/admin/products/add"
                  className="inline-flex items-center justify-center px-4 py-2 space-x-1 bg-red-500 text-white rounded-md shadow hover:bg-transparent hover:text-red-500 hover:border-red-500 hover:border"
                >
                  <span>Add Product</span>
                </Link>
              </div>
            </div>

            <div className="font-[sans-serif] overflow-x-auto">

              <table className="min-w-full bg-white">
                <thead className="whitespace-nowrap">
                  <tr>
                    <th colSpan={5}>
                      <tr>
                        <th className="px-1 text-left text-sm font-semibold text-gray-800">
                          <button
                            className={`inline-flex items-center justify-center px-4 py-2 rounded-md shadow ${filter === 'all' ? 'bg-gray-200' : 'bg-white border-gray-300 border'
                              }`}
                            onClick={() => handleFilterChange('all')}
                          >
                            All
                          </button>
                        </th>
                        <th className="px-1 text-left text-sm font-semibold text-gray-800">
                          <button
                            className={`inline-flex items-center justify-center px-4 py-2 rounded-md shadow ${filter === 'active' ? 'bg-gray-200' : 'bg-white border-gray-300 border'
                              }`}
                            onClick={() => handleFilterChange('active')}
                          >
                            Active
                          </button>
                        </th>
                        <th className="px-1 text-left text-sm font-semibold text-gray-800">
                          <button
                            className={`inline-flex items-center justify-center px-4 py-2 rounded-md shadow ${filter === 'draft' ? 'bg-gray-200' : 'bg-white border-gray-300 border'
                              }`}
                            onClick={() => handleFilterChange('draft')}
                          >
                            Draft
                          </button>
                        </th>
                      </tr>
                    </th>
                    <th className={`p-3 text-left text-sm cursor-pointer font-semibold  ${selectedProductsId.length > 0 ? "text-gray-800" : "hidden"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { deleteSelectedProducts() }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </th>
                  </tr>
                  <tr>
                    <th className="pl-4 w-8">
                      <input id="checkbox" onClick={() => { toggleAllProductsSelection() }} type="checkbox" className="hidden peer" />
                      <label
                        htmlFor="checkbox"
                        className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                          <path
                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                            data-name="7-Check"
                            data-original="#000000"
                          />
                        </svg>
                      </label>
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800">
                      Image
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800">
                      Title
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800">
                      Status
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800">
                      Price
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-800">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="whitespace-nowrap">
                  {allProducts?.map((product, index) => {
                    return (
                      <>
                        <tr key={index + 1} className="odd:bg-gray-50">
                          <td className="pl-4 w-8">
                            <input
                              id={`checkbox${index + 1}`}
                              onChange={() => toggleProductSelection(product._id)}
                              type="checkbox"
                              checked={selectedProductsId.includes(product._id)}
                              className="hidden peer"
                            />
                            <label
                              htmlFor={`checkbox${index + 1}`}
                              className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full fill-white"
                                viewBox="0 0 520 520"
                              >
                                <path
                                  d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                  data-name="7-Check"
                                  data-original="#000000"
                                />
                              </svg>
                            </label>
                          </td>
                          <td className="py-2 p-3 text-sm text-gray-800">
                            <Image
                              objectFit="cover"
                              width={40}
                              height={40}
                              src={product.images[0]}
                              alt="Product"
                              className="w-10 h-10 rounded-md"
                            />
                          </td>
                          <td className="py-2 p-3 text-sm text-gray-800">{product.title}</td>
                          <td className="py-2 p-3 text-sm text-gray-800">
                            <span className="w-[68px] block text-center py-1 border border-green-500 text-green-600 rounded text-xs">
                              {product.status === "active" ? "Active" : "Draft"}
                            </span>
                          </td>
                          <td className="py-2 p-3 text-sm text-gray-800">{product.price}</td>
                          <td className="p-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 cursor-pointer fill-gray-500 rotate-90"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="12" cy="12" r="2" data-original="#000000" />
                              <circle cx="4" cy="12" r="2" data-original="#000000" />
                              <circle cx="20" cy="12" r="2" data-original="#000000" />
                            </svg>
                          </td>
                        </tr>
                      </>
                    )
                  })}
                  {allProducts.length == 0 && <tr><td colspan='6'><h1 className='text-center p-3'>No Products Found</h1></td></tr>}
                </tbody>


              </table>


            </div>
          </main>



          <Footer />
        </div >
      </div >
    </>
  );
}


export async function getServerSideProps() {
  const baseUrl = process.env.baseUrl;

  try {
    const apiUrl = `${baseUrl}/api/admin/product/getProducts`;

    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error('Failed to fetch products');
    }

    return {
      props: {
        products: response.data.products
      }
    };
  } catch (error) {
    console.error('Error fetching products:', error.message);

    return {
      props: {
        products: []
      }
    };
  }
}
