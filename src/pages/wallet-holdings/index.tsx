import {
  Container,
  HeaderArea,
  BodyArea,
  FooterArea,
  Label
} from './styles';

import { 
  Header,
  Footer
 } from '../../components';

 type Props = {

 };

export default function WalletHoldings(props: Props) {
  return(
    <Container>
      <HeaderArea>
        <Header label="Crypto Balance" />
      </HeaderArea>
      <BodyArea>
        <Label>Creating Wallet holdings!</Label>
      </BodyArea>
      <FooterArea>
        <Footer label="Powered by cwwt" />
      </FooterArea>
    </Container>
  )
};