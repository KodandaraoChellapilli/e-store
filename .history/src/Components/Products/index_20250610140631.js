import './_products.scss';

const Products = () => {

    const productData =[
        {
            pName:"Jacket",
            price: 45,
            img:"shop-1.jpg"
        },
         {
            pName:"Purse",
            price: 50,
            img:"shop-2.jpg"
        },
         {
            pName:"Dress",
            price: 38,
            img:"shop-3.jpg"
        },

         {
            pName:"Denim",
            price: 45,
            img:"shop-1.jpg"
        },
         {
            pName:"Jacket",
            price: 45,
            img:"shop-1.jpg"
        },
         {
            pName:"Jacket",
            price: 45,
            img:"shop-1.jpg"
        }
        ]
    return (
        <div>
            <div className= 'mx-5 p-3 col-lg-3 col-md-6  product-card'>
                <div className= 'product-image-container'>

                    <img src={require('../../assets/images/shop/shop-1.jpg')}/>

                </div>

                <div className='product-info'>
                    <h5> <a href='#'> Jacket </a> </h5>
                    <p className='product-price'>$45 </p>

                </div>
            </div>
        </div>
    )
}

export default Products;