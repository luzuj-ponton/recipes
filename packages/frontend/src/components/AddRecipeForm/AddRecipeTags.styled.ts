import { Field } from "formik";
import { Color } from "src/enums/color.enum";
import styled from "styled-components";
import { darken } from "polished";
import { FontSize } from "src/enums/fontsize.enum";

export const Wrapper = styled.div`
  margin: 20px 0;
  p {
    font-size: ${FontSize.MediumS};
    margin-bottom: 5px;
    text-transform: capitalize;
  }
`;

export const TagGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 120px));
  align-items: center;
`;

export const TagWrapper = styled.div`
  width: 80%;
`;

export const Label = styled.label`
  background-color: ${Color.Bone};
  border-radius: 10px;
  text-align: center;
  display: block;
  padding: 10px 20px;
  margin: 10px 0;
  font-size: ${FontSize.SmallS};
  color: ${Color.Grey};
  cursor: pointer;
  text-transform: uppercase;
`;

export const Input = styled(Field)`
  &:checked + ${Label} {
    background-color: ${darken(0.1, Color.Bone)};
  }
  display: none;
`;
