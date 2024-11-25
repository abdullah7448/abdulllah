import Banner_Img from "./img-design-banner";
import "../styles/comphonents-styles/banner.css"
import Designation from "./designation";
import My_img from "./myImg";
import BannerLinks from "./bannerMyLinks";

export default function Banner (){
    return(
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner_wrapper">
                        <Banner_Img/>
                        <Designation/>
                        <My_img/>
                        <BannerLinks/>
                    </div>
                </div>
            </div>
        </>
    )
}