import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

// Product
function Product() {
    return (
        <div className="products">
            <div className="box">
                <img src={one} alt="Fogg Wood Extrem"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p><br></br>
                <p>₹ 459</p>
            </div>
            <div className="box">
                <img src={three} alt="villain"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p><br></br>
                <p>₹ 399</p>
            </div>
            <div className="box">
                <img src={two} alt="Designs Club"></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p><br></br>
                <p>₹ 599</p>
            </div>
        </div>
    )
}
export default Product