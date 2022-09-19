import styled from "styled-components";

interface ButtonProps {
  width?:         string;
  height?:        string;
  lineHeight?:    string;
  color?:         string;
  border?:        string;
  borderRadius?:  string;
  fontSize?:      string;
  fontWeight?:    string;
  padding?:       string;
  bgColor?:       string;
  children?:      string;
}

const Button = ({width, height, lineHeight, color, border, borderRadius, bgColor, fontSize, fontWeight, padding, children="버튼"} :ButtonProps) => {
  const styles = {width, height, lineHeight, color, border, borderRadius, bgColor, fontSize, fontWeight, padding, children};
  return (
    <BtnBx {...styles} className="btnBx">{children}</BtnBx>
  )
};

 Button.defaultProps = {
  width:        "108px",
	height:       "44px",
  lineHeight:   "inherit",
	color :       "#fff",
  border:       "1px solid #eee",
	borderRadius: "1.6rem",
	bgColor:      "#4B83F2"
 }

const BtnBx = styled.button<ButtonProps>`
  width:            ${props => props.width};
  height:           ${props => props.height};
  line-height:      ${props => props.lineHeight};
  color:            ${props => props.color};
  border:           ${props => props.border};
  border-radius:    ${props => props.borderRadius};
  background-color: ${props => props.bgColor};
  font-size:        ${props => props.fontSize};
  font-weight:      ${props => props.fontWeight};
  padding:          ${props => props.padding};
`

export default Button;