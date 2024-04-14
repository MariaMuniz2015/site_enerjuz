import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion  style={{ background:"Lavender" }} defaultActiveKey="0">
      <Accordion.Item  style={{ background:"Lavender" }} eventKey="0">
        <Accordion.Header><h5>Como minha conta vai ficar mais barata?</h5> </Accordion.Header>
        <Accordion.Body>
        Quando você assina um plano da Enerjuz, a distribuidora
         desconta na sua conta de luz o valor referente. 
        Esse valor aparece na sua conta como “energia injetada”.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item  style={{ background:"Lavender" }}  eventKey="1">
        <Accordion.Header><h5>Vou ter que pagar 2 contas separadas? </h5></Accordion.Header>
        <Accordion.Body>
        Sim, mas ao somar as duas contas, o valor será mais baixo do que o 
        pago anteriormente para a distribuidora. O plano de energia solar vale a pena.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item  style={{ background:"Lavender" }} eventKey="2">
        <Accordion.Header ><h5>Tenho que fazer alguma instalação?</h5></Accordion.Header>
        <Accordion.Body>
        Não. A energia gerada pelas Fazendas Solares é injetada na rede da distribuidora. 
        Você só precisa fazer sua assinatura e aproveitar os benefícios!
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item  style={{ background:"Lavender" }}  eventKey="3">
        <Accordion.Header><h5>Como ficam as bandeiras tarifarias de energia?</h5></Accordion.Header>
        <Accordion.Body>
        Assinando os créditos de energia solar você fica protegido das mudanças de bandeiras 
        tarifárias que aumentam a conta de luz.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item   style={{ background:"Lavender" }} eventKey="4">
        <Accordion.Header><h5>Como a energia chega até os clientes?</h5></Accordion.Header>
        <Accordion.Body>
        Após o início da operação das usinas, os créditos de energia gerados pela EDP são injetados na
         rede elétrica da distribuidora e alocados para os nossos clientes para serem compensados na 
         conta de energia. Ou seja, a energia chega até a unidade consumidora da mesma forma como 
         sempre chegou: pela rede da distribuidora de energia, sem custo de instalação ou de manutenção.
         Também não é necessário realizar troca de medidor ou qualquer alteração/adaptação no imóvel.
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item  style={{ background:"Lavender" }}  eventKey="5">
        <Accordion.Header><h5>Quem pode participar?</h5></Accordion.Header>
        <Accordion.Body>
        Pessoas jurídicas cuja(s) unidade(s) consumidora(s) esteja(m)
         conectada(s) à rede da distribuidora local em baixa tensão 
        (sem transformador dedicado), com conta a partir de R$ 300,00
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default BasicExample;