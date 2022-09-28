import styled, { css } from "styled-components";
import SpeechBubble from "./SpeechBubble";

const FooterComponents = () => {

  return (
    <Footer>
      <div className="footer_inner">
        <h2>Pick Studio</h2>

        <div className="emoji_inner">
          <ul className="item_inner">
            <li className="item">
              <SpeechBubble githubLink={"https://github.com/younhoso/"} blogLink={"https://triplexlab.tistory.com/"} children={"FrontEnd"} />
              <img src="/src/assets/img/younhosoEmoji.svg" alt="emoji" />
            </li>
            <li className="item">
              <SpeechBubble githubLink={"https://github.com/younhoso/"} blogLink={"https://triplexlab.tistory.com/"} children={"FrontEnd"}/>
              <img src="/src/assets/img/younhosoEmoji.svg" alt="emoji" />
            </li>
            <li className="item">
              <SpeechBubble githubLink={"https://github.com/younhoso/"} blogLink={"https://triplexlab.tistory.com/"} children={"FrontEnd"}/>
              <img src="/src/assets/img/younhosoEmoji.svg" alt="emoji" />
            </li>
            <li className="item">
              <SpeechBubble githubLink={"https://github.com/younhoso/"} blogLink={"https://triplexlab.tistory.com/"} children={"FrontEnd"}/>
              <img src="/src/assets/img/younhosoEmoji.svg" alt="emoji" />
            </li>
          </ul>
        </div>
      </div>
    </Footer>
  )
};

const Footer = styled.footer`
height: 123px;

.footer_inner {max-width: 1120px;margin: 0 auto;height: 123px; display: flex; justify-content: space-between; align-items: center};
.emoji_inner .item_inner{display: flex;}
.emoji_inner .item_inner .item {width: 76px; height: 76px; text-align: center; border-radius: 10px; margin-right:20px; position: relative;}
.emoji_inner .item_inner .item:last-child{margin-right: 0;}
.emoji_inner .item_inner .item .speechbubble{visibility: hidden;opacity: 0;}
.emoji_inner .item_inner .item:hover .speechbubble{visibility: visible;  opacity: 1;}

  ${({theme}) => {
    const {fontSizes, fontWeight, colors } = theme;
    return css`
      background-color: ${colors.black};
      color: ${colors.white};
      .footer_inner h2{font-size: ${fontSizes.font28}};
      .emoji_inner .item_inner .item {background-color: ${colors.white}};
    `
  }};
`


export default FooterComponents;