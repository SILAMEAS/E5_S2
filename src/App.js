import { useEffect, useState } from "react";
import Navigator from "./routes";
import "react-slideshow-image/dist/styles.css";
function getWindowSize() {
  const Widthinner = window.innerWidth;
  return Widthinner;
}

function App() {
  const [width, setWidth] = useState(getWindowSize());
  console.log(width);
  /// window size
  useEffect(() => {
    function handleWidth() {
      setWidth(getWindowSize);
    }
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <>
      <Navigator />
    </>
  );
}

export default App;
