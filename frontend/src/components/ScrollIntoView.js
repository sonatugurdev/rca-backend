import * as React from "react";

export const ScrollIntoView = (props) => {
  const targetElement = React.useRef();
  React.useEffect(() => {
    if (props.shouldScroll) {
      targetElement.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [props.shouldScroll]);

  return <div ref={targetElement}>{props.children}</div>;
};
