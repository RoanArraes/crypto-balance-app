import {
  InputArea,
  InputField,
  Label
} from './styles';

type Props = {
  label?: string;
  type: string;
  placeholder?: string;
};

function InputRounded({label, type, placeholder}: Props) {
  return (
    <InputArea>
      <Label>{label}</Label>
      <InputField type={type} placeholder={placeholder}/>
    </InputArea>
  )
}

export default InputRounded;