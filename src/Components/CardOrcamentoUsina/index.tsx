import { Container, TituloContainer, Formulario, Button, Input, ContainerBtn} from "./style";




export const CardOrcamentoUsina: React.FC = () => {
  return (
    <Container>
    
        <TituloContainer>
        Preencha o formulário e descubra quanto vc pode economizar.
      </TituloContainer>

      <Formulario>
       
      
    
              <Input placeholder="Nome" />
           
    
              <Input placeholder="Email"/>
          
  
              <Input placeholder="Telefone"/>

       
              <Input placeholder="Estado" />

        
              <Input placeholder="Cidade" />

          
              <Input placeholder="Valor conta energia" />

          

          <ContainerBtn>

            <Button type="submit">ECONOMIZAR AGORA</Button>
         
          </ContainerBtn>
   
      </Formulario>
    </Container>
  
  );
  }