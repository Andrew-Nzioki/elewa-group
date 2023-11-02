import React from "react";

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

const ContentCard: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default ContentCard;
