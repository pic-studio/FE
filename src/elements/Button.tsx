import styled from "styled-components";

interface ButtonProps {
  width?:         string;
  height?:        string;
  lineHeight?:    string;
  color?:         string;
  border?:        string;
  borderRadius?:  string;
  bgColor?:       string;
  boxShadow?:     string;
  fontSize?:      string;
  fontWeight?:    string;
  padding?:       string;
  children?:      string;
}

const Button = ({width, height, lineHeight, color, border, borderRadius, bgColor, boxShadow, fontSize, fontWeight, padding, children="버튼"} :ButtonProps) => {
  const styles = {width, height, lineHeight, color, border, borderRadius, bgColor, boxShadow, fontSize, fontWeight, padding, children};
  return (
    <BtnBox {...styles} className="btnBx">{children}</BtnBox>
  )
};

 Button.defaultProps = {
  width:        "108px",
  height:       "44px",
  lineHeight:   "inherit",
  color :       "#fff",
  border:       "1px solid transparent",
  borderRadius: "1.6rem",
  bgColor:      "#4B83F2",
  boxShadow:    "0px 4px 12px transparent",
 }

const BtnBox = styled.button<ButtonProps>`
  width:            ${props => props.width};
  height:           ${props => props.height};
  line-height:      ${props => props.lineHeight};
  color:            ${props => props.color};
  border:           ${props => props.border};
  border-radius:    ${props => props.borderRadius};
  background-color: ${props => props.bgColor};
  box-shadow:       ${props => props.boxShadow};
  font-size:        ${props => props.fontSize};
  font-weight:      ${props => props.fontWeight};
  padding:          ${props => props.padding};
`

export default Button;