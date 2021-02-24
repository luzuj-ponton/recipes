import React from "react";
import { IconWrap, StyledIcon } from "./SocialIcon.styled";
import { SocialIconProps } from "./SocialIcon.types";

export const SocialIcon: React.FC<SocialIconProps> = ({ color, src, link }) => {
  return (
    <IconWrap color={color} href={link} rel="noopener noreferrer" target="_blank">
      <StyledIcon color={color} src={src} />
    </IconWrap>
  );
};
