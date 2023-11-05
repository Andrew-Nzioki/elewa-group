/* The elewa group website header is identical accross pages 
and this component is reused to maintain consistency of the structure*/
import React from "react";


//defining props that the component accepts
type HeaderProps = {
  title: string;
  vision: string;
  titleClassName?: string;
  visionClassName?: string;
  divClassName?: string;
  className?: string;
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  title,
  vision,
  titleClassName,
  visionClassName,
  divClassName,
  className,
  children,
}) => {
  return (
    <div className={`${className}`}>
      <h2 className={`${titleClassName}`}>{title}</h2>
      <h1 className={`${visionClassName}`}>{vision}</h1>
      <div className={`${divClassName}`}>{children}</div>
    </div>
  );
};

export default Header;
