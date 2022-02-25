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
};

function InputRounded({
  type,
  placeholder,
  margin,
  maxWidth
}: Props) {
  return (
    <InputField
      margin={margin}
      type={type}
      placeholder={placeholder}
      maxWidth={maxWidth}
    />
  )
}

export default InputRounded;