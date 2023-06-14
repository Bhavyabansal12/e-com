import React from 'react'
import ProductDescription from './ProductDescription'
import Recommendation from '../Recommendation/Recommendation'
import SimilarRecommendation from '../Recommendation/SimilarRecommendation'

const Image = [
    { img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m.webp' },
    { img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-1.webp' },
    { img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-2.webp' },
    { img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-3.webp' },
    { img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-4.webp' },
    { img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-5.webp' }
]

function ProductReusable() {
    return (<>
        <div className='container mx-auto px-14'>
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-1">
                    <div className="grid grid-rows-6 gap-1 justify-center ">
                        {
                            Image.map((i) => {
                                return (
                                    <>
                                        <div className=''><img className='h-16' src={i.img} /></div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-span-5">
                    <div className=''>
                    <img className='w-full' src="assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp" />
                    </div>
                </div>
                <div className="col-span-6 pl-8">
                    <ProductDescription />
                </div>
            </div>
        </div>
        <Recommendation />
        <SimilarRecommendation />
    </>)
}

export default ProductReusable