import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ product, itemsPerRow }) {
  const rowClass = itemsPerRow ? "lg:w-1/4" : "";
  return (
    <>
      <div className={`sm:w-1/2 md:w-1/3 ${rowClass} px-2 flex items-stretch justify-stretch`}>
        <div class={`mb-2 flex items-center flex-col bg-white hover:shadow-lg w-full border rounded-xl p-3 cursor-pointer`}>
          <Link href={`/product/${product._id}`} className='relative block w-full h-48'>
            <Image src={product.images[0]} alt={product.thumbnail} layout="fill" className='hover:scale-105 transition' objectFit="contain" />
          </Link>
          <div class="mt-4 w-full mb-2 flex-grow justify-between ">
            <Link href={`/product/${product._id}`} class="flex-1 text-lg font-semibold text-gray-900 mb-0">{product.title}</Link>
          </div>
          <p class="w-full text-md text-gray-800 mt-0">${product.price.toFixed(2)}</p>
          <div className="flex w-full items-center ms-2 my-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`} >
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            ))}
            <p className="text-gray-600 ml-2">{product.rating}</p>
          </div>
          <div className="w-full flex space-x-2 items-center justify-between">
            <button type="button" class="hover:bg-gray-100 px-3 py-3 rounded-md flex flex-col-reverse cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button type="button" className='p-3 bg-red-500 border flex-grow rounded-lg hover:bg-red-600 text-white font-normal text-sm w-full'>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
