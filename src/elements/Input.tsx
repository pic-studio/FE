import styled from "styled-components";

interface InputProps{
  width?:         string;
  height?:        string;
  color?:         string;
  border?:        string;
  borderRadius?:  string;
  bgColor?:       string;
  fontSize?:      string;
  fontWeight?:    string;
  padding?:       string;
  children?:      string;
  placeholder?:   string;
  onChange?:      (e : React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({width, height, color, border, borderRadius, bgColor, fontSize, fontWeight, padding, children, onChange, placeholder="텍스트를 입력해주세요.",}: InputProps) => {
  const styles = {width, height, color, border, borderRadius, bgColor, fontSize, fontWeight, padding}
  return (
    <InputBx {...styles} className="inputBx" defaultValue={children} placeholder={placeholder} onChange={onChange}/>
  )
}

Input.defaultProps = {
  width:        "100%",
  height:       "45px",
  color :       "#000",
  border:       "1px solid #E0E0E0",
  borderRadius: "0.5rem",
  bgColor:      "#fff",
  padding:      "0 10px"
}

const InputBx = styled.input<InputProps>`
  width:            ${props => props.width};
  height:           ${props => props.height};
  color:            ${props => props.color};
  border:           ${props => props.border};
  border-radius:    ${props => props.borderRadius};
  background-color: ${props => props.bgColor};
  font-size:        ${props => props.fontSize};
  font-weight:      ${props => props.fontWeight};
  padding:          ${props => props.padding};
`;

export default Input;