import React from "react";

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

const ContentCard: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`rounded bg-slate-200 shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default ContentCard;
