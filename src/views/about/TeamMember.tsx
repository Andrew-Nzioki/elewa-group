import React from 'react';

type TeamMemberProps = {
  imgSrc: string;
  altText: string;
  name: string;
  position: string;
  linkedinUrl: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ imgSrc, altText, name, position, linkedinUrl }) => {
  return (
    <li className="rounded-lg">
      <img src={imgSrc} alt={altText} />
      <h4>{name}</h4>
      <p>{position}</p>
      <a href={linkedinUrl}>in</a>
    </li>
  );
};

export default TeamMember;
