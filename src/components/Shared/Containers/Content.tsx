import React from "react";
//component to return content , acts a wrapper or main container component
type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

const ContentCard: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default ContentCard;
