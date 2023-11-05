// Team member component
import React from "react";

/**
 * @typedef {Object} TeamMemberProps - Props for the TeamMember component.
 * @property {string} imgSrc - The URL for the team member's image.
 * @property {string} altText - The alternative text for the image.
 * @property {string} name - The name of the team member.
 * @property {string} position - The position of the team member.
 * @property {string} linkedinUrl - The LinkedIn URL of the team member.
 */

/**
 * Team Member component displays details about a team member.
 * @param {TeamMemberProps} props - The props for the TeamMember component.
 * @returns {JSX.Element} TeamMember component UI.
 */
type TeamMemberProps = {
  imgSrc: string;
  altText: string;
  name: string;
  position: string;
  linkedinUrl: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  imgSrc,
  altText,
  name,
  position,
  linkedinUrl,
}) => {
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
