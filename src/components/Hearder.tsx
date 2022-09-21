import { useState } from "react";
import styled, { css } from "styled-components";
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

const Hearder = () => {
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
		<>
			<SerchBox isClose={value.isClose}>
				<i className="ic-search serch_icon"></i>
				<i className="ic-close_mark search_close" ></i>
				<Input bgColor="#EFEFEF" borderRadius="1.6rem" padding="0 60px 0 50px" children={value.serchTxt} onChange={setInput}/>
			</SerchBox>
		</>
	)
}

const SerchBox = styled.div<HearderProps['serchInit']>`
 ${({isClose}) => {
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
			display: ${isClose ? 'black' : 'none'};
		}
	`
 }}
	
`;

export default Hearder;