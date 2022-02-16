import { 
  Footer,
  Header
} from "../../components";

import { 
  BodyArea,
  Container,
  FooterArea,
  HeaderArea,
  Label
} from "./styles"

type Props = {

};

export default function WalletBalance(props: Props) {
  return(
    <Container>
      <HeaderArea>
        <Header label="Crypto Balance" />
      </HeaderArea>
      <BodyArea>
        <Label>Wallet Balance!</Label>
      </BodyArea>
      <FooterArea>
        <Footer label="Powered by cwwt"/>
      </FooterArea>
    </Container>
  )
};