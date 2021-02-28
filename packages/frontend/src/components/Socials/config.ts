import { Color } from "src/enums/color.enum";
import linkedinIcon from "../../assets/images/linkedin.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import githubIcon from "../../assets/images/github.svg";
import { SocialsInfo } from "src/types/SocialsInfo.types";

export const socials: SocialsInfo[] = [
  { link: "https://www.linkedin.com/", color: Color.Blue, src: linkedinIcon },
  { link: "https://www.facebook.com/", color: Color.LightBlue, src: facebookIcon },
  { link: "https://github.com/", color: Color.Violet, src: githubIcon },
];
