import {
  Button
} from './styles';

interface Props {
  type: "button" | "submit" | "reset",
  typeButton: string,
  onClick: () => void
}

export default function ButtonTypes({type, typeButton, onClick}: Props) {
  return(
    <Button 
      onClick={onClick}
      type={type}
      typeButton={typeButton}
    >
      {typeButton === "remove" ?
        "x" 
        : typeButton === "add" ?
        "+"
        : null
      }
    </Button>
  )
}