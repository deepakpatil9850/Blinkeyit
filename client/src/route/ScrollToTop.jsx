import {useLayoutEffect} from "react";
import {useLocation} from "react-router-dom";

const ScrollToTop = (props) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
