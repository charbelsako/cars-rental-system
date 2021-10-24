import React from "react";
import { animated, useSpring, config } from "react-spring";

const Loading = () => {
  const loadingAnimation = useSpring({
    loop: { reverse: true },
    from: { left: "calc(0% - 0px)" },
    to: { left: "calc(100% - 100px)" },
    config: config.slow,
  });

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-6">
        <animated.div style={loadingAnimation} className="loading"></animated.div>
      </div>
    </div>
  );
};

export default Loading;
