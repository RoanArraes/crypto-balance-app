import {
  Label,
  Wrapper,
  InputField
} from './styles';

interface InputProps {
  value?: string | number;
  label?: string;
  type: string;
  placeholder?: string;
  width?: string;
  maxWidth?: string;
  margin?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  maxLength?: string;
  name?: string;
  autoComplete?: string;
  register?: any;
  registerProps?: {};
}

export default function FormInputs({
  label,
  name,
  type,
  register,
  placeholder,
  autoComplete,
  maxLength,
  registerProps,
  value,
  onKeyDown
}: InputProps) {
  return(
    <Wrapper
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
    >
      {label &&
        <Label fontSize='micro'>{label}</Label>
      }
      <InputField  
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        value={value}
        onKeyDown={onKeyDown}
        {...register(name, {...registerProps})} 
      />
    </Wrapper>
  );

}
