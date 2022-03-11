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
  maxLength?: number;
  name?: string,
  autoComplete?: string;
  readOnly?: boolean;
  value?: string;
};

function InputRounded({
  type,
  placeholder,
  margin,
  maxWidth,
  onChange,
  maxLength,
  name,
  autoComplete,
  readOnly,
  value
}: Props) {
  return (
    <InputField
      margin={margin}
      type={type}
      placeholder={placeholder}
      maxWidth={maxWidth}
      onChange={onChange}
      maxLength={maxLength}
      name={name}
      autoComplete={autoComplete}
      readOnly={readOnly}
      value={value}
    />
  )
}

export default InputRounded;