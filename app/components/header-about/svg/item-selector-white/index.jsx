import React from "react";
import { useMediaQuery } from "react-responsive";

const Index = () => {
  const [isDesktop, setIsDesktop] = React.useState("#000")
  const isDesktopQuery = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  React.useEffect(() => {
    const screenWidth = document.documentElement.offsetWidth;

    if (screenWidth > 600) setIsDesktop("#fff");
  }, [isDesktop]);
  return (
    <svg
      className="w-[12rem] h-[6rem] "
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M6.77 0.27L11.74 4.66C12.32 5.18 11.85 6 10.96 6L1.03 6C0.14 6 -0.33 5.18 0.25 4.66L5.22 0.27C5.63 -0.1 6.36 -0.1 6.77 0.27Z"
        fill={isDesktop}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default Index;
