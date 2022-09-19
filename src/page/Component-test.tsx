import Button from "../elements/Button";

const Component = () => {
	return (
		<>
			<Button color="#fff" children="회원가입"/>
			<Button color="#000" border="1px solid #eee" bgColor="#fff" children="로그인"/>
			<Button width="188px" color="#000" bgColor="#F0F3F5" borderRadius="6px" children="NO"/>
			<Button width="188px" color="#fff" borderRadius="6px" children="YES"/>
			<Button width="188px" color="#ED5A49" bgColor="#FDF1F0" borderRadius="6px" children="YES"/>
			<Button width="405px" color="#fff" borderRadius="6px" boxShadow="0px 4px 12px rgba(0, 79, 255, 0.4)" children="로그인"/>
		</>
	)
} 

export default Component;