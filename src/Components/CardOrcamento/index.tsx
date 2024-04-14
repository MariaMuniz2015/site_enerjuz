import { Container,Titulo, TituloContainer, Formulario, Button, Input, ContainerBtn, Menssage} from "./style";



export const CardOrcamento: React.FC = () => {
  return (
    <Container>
      <Titulo>Solicitar Orçamento</Titulo>
        <TituloContainer>
        Solicite orçamento de forma simples e rápida. Preencha os formulário
      </TituloContainer>

      <Formulario>
       
      
      
              <Input placeholder="Nome" />
           
             
              <Input placeholder="Email"/>
          
      
              <Input placeholder="Telefone"/>
         
    
              <Menssage  placeholder="Descreva sua necessidade" />
     
          

             

          <ContainerBtn>

            <Button type="submit">ENVIAR</Button>
         
          </ContainerBtn>
   
      </Formulario>
    </Container>
  
  );
  }