import styled, {keyframes} from "styled-components"

export const ProgressBar = styled.div`
    width: 100%;
    height: 0.5rem;
    border-radius: 0.25rem;
    background: #555;
    overflow: hidden;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
`

const progressBar = keyframes`
    to {
      transform: initial;
    }           
`;
export const ProgressBarFill = styled.div`
  width: ${(props) =>
    props.base_stat >= 100 ? "100%" : `${props.base_stat}%`};
  background: ${(props) => (props.base_stat >= 50 ? "#1CD80E" : "#FF364E")};
  box-shadow: 0 0 0.75rem 0.25rem
    ${(props) =>
      props.base_stat >= 506
        ? "rgba(28, 216, 14, 0.25)"
        : "rgba(255, 54, 78, 0.25)"};
  height: 0.5rem;
  border-radius: 0.25rem;
  transform: translate3d(-100%, 0, 0);
  animation: ${progressBar} 2s forwards;
`;