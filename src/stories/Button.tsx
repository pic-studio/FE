import styled from 'styled-components';


interface ButtonProps {
  primary?:         boolean;
  size?:            'small' | 'medium' | 'large';
  backgroundColor?: string;
  color?:           string;
  label:            string;
  onClick?:         () => void;
}

const Button = ({label, primary, size, backgroundColor, color, ...props}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <ButtonMain
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </ButtonMain>
  );
};

Button.defaultProps = {
  size:        'small',
  primary:     false
};

const ButtonMain = styled.button`
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  &.storybook-button--primary {
    color: #fff;
    background-color: #1ea7fd;
  }
  &.storybook-button--small {
    font-size: 12px;
    height: 32px;
    line-height: 1;
    padding: 0 1.2rem;
  }
  &.storybook-button--medium {
    font-size: 14px;
    height: 36px;
    line-height: 1;
    padding: 0 1.3rem;
  }
  &.storybook-button--large {
    font-size: 16px;
    height: 40px;
    line-height: 1;
    padding: 0 1.5rem;
  }

`
export default Button;