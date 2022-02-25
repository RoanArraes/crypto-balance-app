import {
  Select,
} from './styles'

interface Props{
  width?: string;
  maxWidth?: string;
  margin?: string;
  showInList?: number;
  options: {
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
  onChange
}) => {
  return( 
    <Select
      width={width}
      maxWidth={maxWidth}
      margin={margin}
      size={showInList}
      onChange={onChange}
    >
      {
        options.length > 0 &&
        options.map(op => {
          return(
            <option value={op.value}>
              {op.name}
            </option>
          )
        })
      }
    </Select>
  )
};

export default SelectItem;