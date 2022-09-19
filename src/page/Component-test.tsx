import Button from "../elements/Button";

const Component = () => {
	return (
		<>
			<Button color="#fff" children="버튼 컴포넌트"/>
			<Button width="188px" color="#000" bgColor="#F0F3F5" borderRadius="6px" children="NO"/>
			<Button width="188px" color="#fff" borderRadius="6px" children="YES"/>
		</>
	)
} 

export default Component;