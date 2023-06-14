import React from 'react'
import ProductInfo from './ProductInfo'

const variant = [
    {
        img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
        name: 'Truffle Delight Cake',
        rupees: '₹ 645'
    },
    {
        img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
        name: '1 KG',
        rupees: '₹ 1095'
    },
    {
        img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
        name: '2 KG',
        rupees: '₹ 1935'
    },
]


function SelectProductVariant() {
    return (
        <>
            <div className='flex gap-3'>
                <h4 className=" text-2xl font-medium  text-red-600"> ₹ 645 </h4>
                <h4 className="text-2xl font-medium text-primary line-through"> ₹ 745 </h4>
                <div className="border border-green-600 text-green-600 pt-1 pl-3 pr-3 items-center">13% OFF</div>
                <p className="underline decoration-sky-600 hover:text-blue-800">View Offers</p>
            </div>
            <div>
                <h6 className="text-base font-medium mt-6 mb-6">Select Variant</h6>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {
                        variant.map((i) => {
                            return (
                                <>
                                    <div
                                        className="rounded border border-red-100 hover:bg-red-100 hover:border-red-400">
                                        <img src={i.img} className='rounded ease-in-out duration-500 p-2 hover:p-0' />
                                        <div className="pt-3 p-2">
                                            <p>{i.name}</p>
                                            <h3 className="pt-4 text-xl font-medium  text-red-600"> {i.rupees}</h3>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex mt-8 mb-8 pt-5 pb-5 border border-y-3 border-x-0'>
                <form className="w-full max-w-lg ">
                    <div className="flex flex-wrap">
                        <div className="flex p-1 border">
                            <div className="w-full md:w-1/3 md:mb-0">
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4  focus:outline-none" id="grid-city" type="text" placeholder="Albuquerque" />
                            </div>
                            <div className="w-full md:w-1/2 md:mb-0">
                                <input className="appearance-none block w-full text-gray-700 rounded py-3 px-4  focus:outline-none" id="grid-city" type="text" placeholder="Albuquerque" />
                            </div>
                            <div className="w-full md:w-1/4 md:mb-0">
                                <input className="appearance-none block w-full bg-blue-200 text-blue-800 rounded py-3 px-4  focus:outline-none" id="grid-zip" type="text" placeholder="90210" />
                            </div>
                        </div>
                    </div>
                </form>
                <div className='p-5'>Saved Address</div>
            </div>
            <ProductInfo />
        </>
    )
}

export default SelectProductVariant