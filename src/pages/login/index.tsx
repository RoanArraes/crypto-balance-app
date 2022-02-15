import {
  Container,
  Body,
  InputArea,
  ButtonArea,
  HeaderArea,
} from './styles';

import {
  InputRounded,
  ButtonRounded,
  Header,
  Footer
} from '../../components';

type Props = {

};

function Login(props: Props) {
  return(
    <Container>
      <HeaderArea>
        <Header label="crypto balance" />
      </HeaderArea>
      <Body>
        <InputArea>
          <InputRounded label="user" type="text" placeholder="Enter your e-mail"/>
        </InputArea>
        <InputArea>
          <InputRounded label="password" type="password"  placeholder="Enter your password"/>
        </InputArea>
        <ButtonArea>
          <ButtonRounded label="login" type="submit" />
        </ButtonArea>
      </Body>
      <Footer label={"Powered by cwwt"} />
    </Container>
  )
}

export default Login;