import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const StyledCountdown = styled.div`
  width: 640px;
  margin: auto;
`;

export const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body{
    font-family: "Arial", "Helvetica";
    background: ${({ theme }) => theme.global.body_color};
  }

  h1, h2, h3, h4, h5 {
    text-align: center;
  }

  button {
    color: ${({ theme }) => theme.buttons.primary_button_text_color};
    border-color: ${({ theme }) => theme.buttons.primary_button_border_color};
    border-radius: ${({ theme }) => theme.buttons.primary_button_border_radius};
    background: ${({ theme }) => theme.buttons.primary_button_background_color};
    font-family: ${({ theme }) => theme.buttons.secondary_button_font_family};
    margin: 10px;
    padding: 2px 4px;
  }
`;

export const Form = styled.form`
  width: 640px;
  background: ${({ theme }) => theme.forms.body_color};
  font-size: ${({ fontSize }) => fontSize};
  margin: auto;
  text-align: center;

  label {
    font-size: 0.8em;
    padding: 0px 2px 0px 10px;
  }

  input {
    margin: 0px 10px;
  }

  input[type='number'] {
    width: 48px;
    font-size: 1em;
  }
`;

const invertColors = keyframes`
  0% {
    color: #222222;
    background: #fbf8f7;
  }

  30% {
    background: #0d6cf2;
  }

  100% {
    color: #fbf8f7;
    background: #222222;
  }
`;

export const ClockContainer = styled.div`
  width: 640px;
  display: flex;
  width: auto;
  height: auto;
  border: 1px solid #222222;
  border-radius: 8px;
  color: ${({ timeIsUp }) => (timeIsUp ? '#fbf8f7' : '#222222')};
  background: ${({ timeIsUp }) => (timeIsUp ? '#222222' : '#fbf8f7')};
  display: block;
  overflow: auto;
  padding: 0px 20px;

  animation-duration: 2s;
  animation-name: ${({ timeIsUp }) => (timeIsUp ? invertColors : '')}; ;
`;

export const FlexRow = styled.div`
  width: 100%;
  margin: ${({ margin }) => margin || 'auto'};
  font-size: ${({ fontSize }) => fontSize};
  display: flex;

  > div {
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: row;
    justify-content: space-around;
    font-size: 1em;
    width: ${(props) => {
      return 100 / props.children.length + '%';
    }};
  }
`;

export const ResetButton = styled.button`
  width: 200px;
  padding: 4px 8px;
  font-size: 18px;
  margin: 20px 60px;
  display: block;
  float: left;
`;

export const TweetButton = styled.button`
  width: 200px;
  padding: 4px 8px;
  font-size: 18px;
  margin: 20px 60px;
  display: block;
  float: left;
`;