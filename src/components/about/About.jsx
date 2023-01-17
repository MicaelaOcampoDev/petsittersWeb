import "./about.css";
import skills from "../../img/skill.png";
import aboutme from "../../img/aboutme.jpg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                <img src={aboutme} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Acerca de nosotros </h1>
                <p className="a-sub"> Te ayudamos a brindar tus servicios de guarderia y cuidador canino/felino </p>
                <p className="a-desc">Tambien te ofrecemos los mejores servicios para que te vayas de viaje lo mas tranquilo posible!
                    </p>
                <div className="a-award">
                    <img src={skills} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">EXPERIENCIAS COMPROBABLES</h4>
                        <p className="a-award-desc">Nuestras revista online te ofrece los mas seguros y confiables servicios.</p>          
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;