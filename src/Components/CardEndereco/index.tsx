
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container, Card, Coluna,Text } from './style';
function CardEndereco() {
  return (
   <Container>
        <Card>
        <Coluna>  <CallIcon fontSize='large' color="primary"/></Coluna>
        <Coluna><Text>Telefone</Text></Coluna>
        <Coluna>(37)9999-8888</Coluna>
      
        </Card>
        <Card>
      
        <Coluna><MailIcon fontSize='large' color="primary"/></Coluna>
        <Coluna><Text>Email</Text></Coluna>
        <Coluna>@vendasenerjuz.com </Coluna>
        </Card>

        <Card>
      
        <Coluna> <WhatsAppIcon fontSize='large' color="primary"/></Coluna>
        <Coluna><Text>WhatsApp</Text></Coluna>
        <Coluna>9999-8888</Coluna>
        </Card>
        <Card>
      
      
      <Coluna> <LocationOnIcon fontSize='large' color="primary"/></Coluna>
         <Coluna><Text>Localização</Text></Coluna>
        <Coluna>Carmo Cajuru MG</Coluna>
      </Card>
    </Container>
  );
}

export default CardEndereco;