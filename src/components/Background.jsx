import Spline from "@splinetool/react-spline";
import "../assets/Background.css";
import "../assets/Animations.css";

const Background = () => {
  return (
    <div className="background fadeIn">
      <Spline scene="https://prod.spline.design/Onc-XFyeiNL-kX8J/scene.splinecode" />
    </div>
  );
};

export default Background;
