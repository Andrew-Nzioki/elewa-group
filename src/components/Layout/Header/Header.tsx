import React from "react";

type HeaderProps = {
  title: string;
  vision: string;
  className?: string;
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  title,
  vision,
  className,
  children,
}) => {
  return (
    <div className={`${className}`}>
      <h1 className={`${className}`}>{title}</h1>
      <p className={`${className}`}>{vision}</p>
      <div className={`${className}`}>{children}</div>
    </div>
  );
};

export default Header;
