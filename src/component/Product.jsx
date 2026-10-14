
import image from './assets/image.jpeg'
import './Product.css'


const Product = () => {
const product=[{
  name:"max",
  price:"300",
  strikePrice:"500"
},
{
  name:"max",
  price:"300",
  strikePrice:"500"}
]

    return (
        <div style={{ display: "flex" }}>
            {product.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img src={image} className="imageShoe" />
                            <h3 className="headingShoe">{item.name}</h3>
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
                                <strike className="strikeShoe">${item.strikePrice}</strike></div>
                            <button className="buttonShoe">  BUY NOW</button>

                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Product