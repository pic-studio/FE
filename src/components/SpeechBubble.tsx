import styled, {css} from "styled-components";

interface SpeechBubbleProps {
  githubLink:   string;
  blogLink:     string;
  children:     string;
}

const SpeechBubble = ({githubLink, blogLink, children}: SpeechBubbleProps) => {
  return(
    <SpeechBubbleComponents className="speechbubble">
      <h3>position: {children}</h3>
      <div className="TeamLink">
        <ul>
          <li><a href={githubLink} target={"_blank"}>GitHun</a></li>
          <li><a href={blogLink} target={"_blank"}>Blog</a></li>
        </ul>
      </div>
    </SpeechBubbleComponents>
  )
};

const SpeechBubbleComponents = styled.div`
  min-width: 169px;
  height: 62px;
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  z-index: 9;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .TeamLink ul {margin-top:8px;}
  .TeamLink ul li {display: inline-block;}
  .TeamLink ul li:first-child {margin-right: 10px;}


  ${({theme}) => {
    const {fontSizes, fontWeight, colors } = theme
    return css`
      color: ${colors.black};
      background-color: ${colors.white};
      border: 2px solid ${colors.blue};
    `
  }};
`



export default SpeechBubble;