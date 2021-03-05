import React from "react";
import Yellow from "./Yellow";

function YellowContainer() {
  const [coordinate, setCoordinate] = React.useState({ x: 0, y: 0 });
  const circleRef = React.useRef();

  const handleListener = (e) => {
    let x = e.clientX - e.target.offsetLeft;
    setCoordinate({ x, y: e.offsetY });
  };
  React.useEffect(() => {
    // Need to copy the ref here. Otherwise the ref will not exist while performing cleanup.
    const copiedRef = circleRef.current;
    copiedRef.addEventListener("mousemove", handleListener);
    return () => {
      return copiedRef.addEventListener("mousemove", handleListener);
    };
  }, []);

  return <Yellow ref={circleRef} coordinate={coordinate} />;
}

export default YellowContainer;
