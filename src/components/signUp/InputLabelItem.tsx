import Input from '../common/Input';

type Props = {
  type?: string;
  label: string;
  value: string;
  onChangeHandler: any;
  buttonComponents?: any;
};

const InputLabelItem = ({ type, label, value, onChangeHandler, buttonComponents }: Props) => {
  return (
    <div>
      <label>{label}</label>
      <Input type={type} value={value} onChange={onChangeHandler} />
      {buttonComponents && buttonComponents}
    </div>
  );
};

export default InputLabelItem;
