import "./header.css";
import Slideshow from "../imgslider/Slideshow";

export default function Header() {

  return (
    <div className="header">
      {/* <Slideshow/> */}
      <div className="headerTitles">
        <span className="headerTitleLg">Easy-iBlog</span>
      </div>
      <Slideshow/>
      {/* <img
        className="headerImg"
        src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?cs=srgb&dl=pexels-pixabay-261579.jpg&fm=jpg"
        alt=""
      /> */}
    </div>
  );
}
