import React, { useState } from 'react'

const info = [
    {
        description: 'Description',
        detail: 'A delectable cake for your loving dad. Made with the finest ingredients, this 600 gms cake is baked to perfection and will delight your taste buds. The cake is topped with yummy chocolate sauce, and decorated with frosting giving it an ombre effect that is rich and decadent. Each bite of this cake is a delightful explosion of flavour that will transport your father to paradise. An accompanying acrylic tag that says Worlds Best Dad makes this cake even more special.'
    },
    {
        description: 'Product Info',
        detail: 'A delectable cake for your loving dad. Made with the finest ingredients, this 600 gms cake is baked to perfection and will delight your taste buds. The cake is topped with yummy chocolate sauce, and decorated with frosting giving it an ombre effect that is rich and decadent. Each bite of this cake is a delightful explosion of flavour that will transport your father to paradise. An accompanying acrylic tag that says Worlds Best Dad makes this cake even more special.'
    },
    {
        description: 'More Info',
        detail: 'A delectable cake for your loving dad. Made with the finest ingredients, this 600 gms cake is baked to perfection and will delight your taste buds. The cake is topped with yummy chocolate sauce, and decorated with frosting giving it an ombre effect that is rich and decadent. Each bite of this cake is a delightful explosion of flavour that will transport your father to paradise. An accompanying acrylic tag that says Worlds Best Dad makes this cake even more special.'
    }
]

function ProductInfo() {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <div className='grid grid-cols-3 gap-6 mt-8 mb-8 pt-5 pb-5 border border-y-3 border-x-0'>
            {
                info.map((i, index) => {
                    return (
                        <>
                            <button
                                className={toggleState === index ? "galleryBtn text-cyan-300" : 'galleryBtn'}
                                onClick={() => toggleTab(index)}>{i.description}
                            </button>
                        </>
                    )
                })
            }
            
         

        </div>
    )
}

export default ProductInfo