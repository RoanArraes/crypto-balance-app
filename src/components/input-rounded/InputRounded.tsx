import {
  InputField
} from './styles';

type Props = {
  label?: string;
  type: string;
  placeholder?: string;
  width?: string;
  maxWidth?: string;
  margin?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  maxLength?: number
};

function InputRounded({
  type,
  placeholder,
  margin,
  maxWidth,
  onChange,
  maxLength
}: Props) {
  return (
    <InputField
      margin={margin}
      type={type}
      placeholder={placeholder}
      maxWidth={maxWidth}
      onChange={onChange}
      maxLength={maxLength}
    />
  )
}

export default InputRounded;