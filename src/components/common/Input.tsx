import defaultTheme from '@/styles/theme/defaultTheme';
import styled from 'styled-components';

const StyleInput = styled.input`
  width: 100%;
  background-color: #fff;
  padding: 0 10px;
  font-size: ${defaultTheme.font.XS};

  &::placeholder {
    font-size: ${defaultTheme.font.XS};
  }
  &:disabled {
    border-bottom: none;
    cursor: no-drop;
  }
`;

type Props = {
  maxLength?: number;
  className?: string;
  type?: string;
  value: string;
  onChange: (e?: any) => void;
  placeholder?: string;
  disabled?: boolean;
};

const Input = ({ maxLength, className, type = 'text', value, onChange, placeholder, disabled }: Props) => {
  return (
    <StyleInput
      maxLength={maxLength}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={!!disabled}
    />
  );
};

export default Input;
