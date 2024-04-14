//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';  
import './cardstyle.css';

interface Props {
  imagem: string;
  titulo: string;
  descricao: string;
  link: string;
}



export const CardServico: React.FC<Props> = (props) =>{

  return (
    <div className="card">
    <div className="col-sm">
      <Card style={{ width:'18rem'}}>
        <Card.Img  variant="top" src={props.imagem} />
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>
           {props.descricao}
          </Card.Text>
         
          <Link to={props.link}> 
       
          <Button variant="primary">VER MAIS</Button>
          </Link>
        </Card.Body>
      </Card>
      </div>
      </div>
    );
  }




