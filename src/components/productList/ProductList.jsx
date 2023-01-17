import "./productList.css";
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Te invito a ver alojamientos y cuidadores disponibles:</h1>
                <p className="pl-desc">Si deseas publicitar tu servicio contactate con nosotros!</p>
            </div>
            <div className="pl-list">
                {products.map ((item) =>(
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
                
            </div>
        </div>
    );
}

export default ProductList;