type Props = {
  type?: string;
  value: string;
  onChange: (e?: any) => void;
};

const Input = ({ type = 'text', value, onChange }: Props) => {
  return <input type={type} value={value} onChange={onChange} />;
};

export default Input;
