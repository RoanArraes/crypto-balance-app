import {
  Select,
} from './styles'

interface Props{
  width?: string;
  maxWidth?: string;
  margin?: string;
  showInList?: number;
  textOptionsUpperCase?: boolean;
  options: {
    id: string,
    name: string,
    value: string
  }[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
}

export const SelectItem: React.FC<Props> = ({
  options,
  width,
  maxWidth,
  margin,
  showInList,
  textOptionsUpperCase,
  onChange
}) => {
  return( 
    <Select
      width={width}
      maxWidth={maxWidth}
      margin={margin}
      size={showInList}
      onChange={onChange}
      textOptionsUpperCase={textOptionsUpperCase}
    >
      {
        options.length > 0 &&
        options.map(op => {
          return(
            <option
              key={op.id}
              value={op.value}
            >
              {op.name}
            </option>
          )
        })
      }
    </Select>
  )
};

export default SelectItem;