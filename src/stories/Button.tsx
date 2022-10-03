import './button.css'

interface ButtonProps {
  label:            string;
  size?:            'sm' | 'md' | 'lg';
  radius?:          'none' | 'sm' | 'md' | 'lg' | 'full';
  backgroundColor?: string;
  color?:           string;
  onClick?:         () => void;
}

const Button = ({label, size, radius, backgroundColor, color, ...props}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['btn', `btn-${size}`, `rounded-${radius}`].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  size:        'sm',
  radius:      'none',
};

export default Button;
