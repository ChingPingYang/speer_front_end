import React from "react";

function Hero({ jump }, ref) {
  return (
    <div>
      <div
        ref={ref}
        style={{
          height: "350px",
          // width: "500px",
        }}
      />
      <button onClick={() => jump(0)}>one</button>
      <button onClick={() => jump(1)}>two</button>
      <button onClick={() => jump(2)}>three</button>
    </div>
  );
}

export default React.forwardRef(Hero);
