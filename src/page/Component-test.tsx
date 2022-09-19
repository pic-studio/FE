import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../elements/Button";
import Input from "../elements/Input";

interface TestProps {
	hide: boolean;
}

const Component = () => {
	const [value, setValue] = useState<TestProps>({hide: false});

	const setInput = (e: React.ChangeEvent<HTMLInputElement>):void => {
		e.preventDefault();
		setValue({hide: true});
	};
	
	return (
		<>
			<Button color="#fff" children="회원가입"/>
			<Button color="#000" border="1px solid #eee" bgColor="#fff" children="로그인"/>
			<Button width="188px" color="#000" bgColor="#F0F3F5" borderRadius="6px" children="NO"/>
			<Button width="188px" color="#fff" borderRadius="6px" children="YES"/>
			<Button width="188px" color="#ED5A49" bgColor="#FDF1F0" borderRadius="6px" children="YES"/>
			<Button width="405px" color="#fff" borderRadius="6px" boxShadow="0px 4px 12px rgba(0, 79, 255, 0.4)" children="로그인"/>
			<Input />
			<SerchBox hide={value.hide}>
				<i className="ic-search serch_icon"></i>
				<i className="ic-close_mark search_close"></i>
				<Input bgColor="#EFEFEF" borderRadius="1.6rem" padding="0 10px 0 50px" onChange={setInput} />
			</SerchBox>
		</>
	)
}

const SerchBox = styled.div<TestProps>`
 ${({hide}) => {
	return css`
		position: relative;
		.serch_icon{
			position: absolute;
			left: 16px;
			top: 50%;
			transform: translateY(-50%);
			font-size: 24px;
			cursor: pointer;
		}
		.search_close {
			position: absolute;
			right: 20px;
			top: 50%;
			transform: translateY(-50%);
			font-size: 24px;
			color: #C1C1C1;
			cursor: pointer;
			display: ${hide ? 'black' : 'none'};
		}
	`
 }}
	
`;

export default Component;