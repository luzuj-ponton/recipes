import { Color } from "src/enums/color.enum";

export interface SocialsStyledProps {
  color?: Color;
}

export interface SocialIconProps extends SocialsStyledProps {
  link: string;
  src: string;
}
