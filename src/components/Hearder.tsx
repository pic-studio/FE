import { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../elements/Button";
import Input from "../elements/Input";

interface HearderProps {
	serchInit: {
		isClose?: 	boolean;
		serchTxt?:	string;
	}
}

const initState = {
	isClose: 		false, 
	serchTxt: 	''
}

const HearderComponents = () => {
	const [value, setValue] = useState<HearderProps['serchInit']>(initState);
	
	const setInput = (e: React.ChangeEvent<HTMLInputElement>):void => {
		e.preventDefault();
		setValue((prev) => {
			return{
				...prev,
				serchTxt: e.target.value
			}
		})
		!e.target.value ? setValue((prev) => {
			return {
				...prev,
				isClose: false
			}
		}) : setValue((prev) => {
			return {
				...prev,
				isClose: true
			}
		})
	};

	return(
		<Header>
			<div className="header_inner">
				<nav>
					<img src="/src/assets/img/logo.svg" alt="pick studio" />
					<SerchBox isClose={value.isClose}>
						<i className="ic-search serch_icon"></i>
						<i className="ic-close_mark search_close" ></i>
						<Input width="550px" bgColor="#EFEFEF" borderRadius="1.6rem" padding="0 60px 0 50px" children={value.serchTxt} onChange={setInput}/>
					</SerchBox>
					<div>
						<Button color="#000" border="1px solid #eee" bgColor="#fff" children="로그인"/>
						<Button color="#fff" children="회원가입"/>
					</div>
				</nav>
			</div>
		</Header>
	)
}

const Header = styled.header`
	width: 100%;
	padding: 0 20px;
	box-sizing: border-box;
	border-bottom: 1px solid #EEEEEE;
	.header_inner {position: relative;max-width: 1848px;margin: 0px auto;}
	nav {height: 85px;display: flex;justify-content: space-between;align-items: center;}
	nav img {width: 163px;}
`

const SerchBox = styled.div<HearderProps['serchInit']>`
 ${({isClose}) => {
	return css`
		position: relative;
		.serch_icon{position: absolute;left: 16px;top: 50%;transform: translateY(-50%);font-size: 24px;cursor: pointer;}
		.search_close {position: absolute;right: 20px;top: 50%;transform: translateY(-50%);font-size: 24px;color: #C1C1C1;cursor: pointer;display: ${isClose ? 'black' : 'none'};}
	`
 }}
	
`;

export default HearderComponents;