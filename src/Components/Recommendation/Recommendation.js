import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const cakes = [
  {
    img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
    cakeName: 'Fresh Fruit Almond Cake (Half Kg)',
    price: '₹ 1095',
    rating: '4.6',
    starIcon:'',
    delivery: 'Same Day Delivery'
  },
  {
    img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
    cakeName: 'Fresh Fruit Almond Cake (Half Kg)',
    price: '₹ 1095',
    rating: '4.6',
    starIcon:'',
    delivery: 'Same Day Delivery'
  },
  {
    img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
    cakeName: 'Fresh Fruit Almond Cake (Half Kg)',
    price: '₹ 1095',
    rating: '4.6',
    starIcon:'',
    delivery: 'Same Day Delivery'
  },
  {
    img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
    cakeName: 'Fresh Fruit Almond Cake (Half Kg)',
    price: '₹ 1095',
    rating: '4.6',
    starIcon:'',
    delivery: 'Same Day Delivery'
  },
  {
    img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
    cakeName: 'Fresh Fruit Almond Cake (Half Kg)',
    price: '₹ 1095',
    rating: '4.6',
    starIcon:'',
    delivery: 'Same Day Delivery'
  },
  {
    img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
    cakeName: 'Fresh Fruit Almond Cake (Half Kg)',
    price: '₹ 1095',
    rating: '4.6',
    starIcon:'',
    delivery: 'Same Day Delivery'
  },
  {
    img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
    cakeName: 'Fresh Fruit Almond Cake (Half Kg)',
    price: '₹ 1095',
    rating: '4.6',
    starIcon:'',
    delivery: 'Same Day Delivery'
  },
  {
    img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
    cakeName: 'Fresh Fruit Almond Cake (Half Kg)',
    price: '₹ 1095',
    rating: '4.6',
    starIcon:'',
    delivery: 'Same Day Delivery'
  },
  {
    img: 'assets/ProductImage/p-truffle-delight-cake-half-kg--145988-m (1).webp',
    cakeName: 'Fresh Fruit Almond Cake (Half Kg)',
    price: '₹ 1095',
    rating: '4.6',
    starIcon:'',
    delivery: 'Same Day Delivery'
  },
]

const videoSlide = {
  loop: true,
  animateOut: 'fadeOut',
  margin: 15,
  navSpeed: true,
  dots: false,
  smartSpeed: 1000,
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 4,
    }
  }
}

function Recommendation() {
  return (
    <div className='mt-10 p-5'>
      <h3 className="mb-10 text-3xl text-center leading-tight font-bold">Recommended For You</h3>
      <OwlCarousel className="owl-theme owl-carousel" {...videoSlide}>
        {
          cakes.map((i) => {
            return (<>
              <div
                className="border rounded-lg border-slate-300">
                <img src={i.img} className='' />
                <div className="p-5">
                  <p>{i.cakeName}</p>
                  <h3 className="pt-4 text-xl font-medium  text-red-600"> {i.price} </h3>
                </div>
              </div>
            </>)
          })
        }
      </OwlCarousel>
    </div>

  )
}

export default Recommendation