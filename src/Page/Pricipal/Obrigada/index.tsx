import {Container, Texto, TextoA} from "./style";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const Obrigada: React.FC = () => {

  return(
 <Container>
  <TextoA>
    Obrigada!  </TextoA>

    <Texto>
    Responderemos sua mensagem o mais rápido possível!
  </Texto>
  <a href="/contato">
   <ArrowBackIosNewIcon color="warning"/>Contato</a>
 </Container>

  
  );
  }