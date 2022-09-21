import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes : {
			font10: string;
			font12: string;
			font13: string;
			font14: string;
			font16: string;
			font18: string;
			font20: string;
			font22: string;
			font24: string;
			font28: string;
			font34: string;
			font50: string;
		}

		fontWeight: {
			extraBold:	number;
			semiBold:		number;
			regular: 		number;
		}

		colors: {
			black: 			string;
			white: 			string;
			kakao: 			string;
			blue: 			string;
			blueLight: 	string;
			red: 				string;
			redLight: 	string;
		}
  }
}