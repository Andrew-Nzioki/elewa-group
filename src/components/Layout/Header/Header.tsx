import React from "react";

const Header = (
  { title }: { title: string },
  { vision }: { vision: string }
) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{vision}</p>
    </div>
  );
};

export default Header;
