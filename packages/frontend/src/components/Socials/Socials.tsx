import React from "react";
import { IconWrap, StyledIcon } from "./Socials.styled";
import { socials } from "./config";

export const Socials: React.FC = () => (
  <>
    {socials.map((social) => (
      <IconWrap
        key={social.link}
        color={social.color}
        href={social.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <StyledIcon color={social.color} src={social.src} />
      </IconWrap>
    ))}
  </>
);
