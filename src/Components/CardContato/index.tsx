
import Card from 'react-bootstrap/Card';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Container} from "./style";

function CardContato() {
  return (
    <Container>
    <Card style={{ width: '18rem', height:'26rem',marginRight:'4rem',marginLeft:'2rem'}}>
      <Card.Img variant="top" />
      <Card.Body>
      <Card.Title style={{marginBottom: '2rem', marginTop:'2rem'}}>Entre em contato </Card.Title>
      <Card.Title></Card.Title>
     < CallIcon color="primary"/>
        <Card.Title>Telefone</Card.Title>
        <Card.Text>(37)99866-9261</Card.Text>
        <MailIcon color="primary"/>
        <Card.Title>Email
       </Card.Title>
     
        <Card.Text><a href="mailto:enerjuz@gmail.com">enerjuz@gmail.com</a> </Card.Text>

        <WhatsAppIcon color="primary"/>
        <Card.Title>WhatsApp</Card.Title>
        <Card.Text><a target="_blank" rel="noreferrer" href="https://wa.me/553799866-9261">(37)99866-9261</a></Card.Text>
    
      </Card.Body>
    </Card>
    </Container>
  );
}

export default CardContato;