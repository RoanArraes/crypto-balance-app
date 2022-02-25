import {
  InputField,
  SearchIcon,
  Wrapper
} from './styles';

interface Props {
  label?: string;
  type: string;
  placeholder?: string;
  width?: string;
  maxWidth?: string;
  margin?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  maxLength?: number
}

export default function InputRoundedSearch({
  type,
  placeholder,
  margin,
  maxWidth,
  onChange,
  maxLength
}: Props) {
  return (
    <Wrapper
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
    >
      <SearchIcon />
      <InputField
        margin={margin}
        type={type}
        placeholder={placeholder}
        maxWidth={maxWidth}
        onChange={onChange}
        maxLength={maxLength}
      />
  </Wrapper>
  )
}