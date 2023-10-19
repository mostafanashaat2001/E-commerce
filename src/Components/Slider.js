import slider1 from './Images/slider-1.jpg'
import slider2 from './Images/slider-2.webp'
import slider3 from './Images/slider-3.png'
import '../components.css';
function Slider(){
    return(
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade pt-5">
                <div className="carousel-inner pt-4">
                    <div className="carousel-item active slider">
                    <img src={slider1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item slider">
                    <img src={slider2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item slider">
                    <img src={slider3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Slider;