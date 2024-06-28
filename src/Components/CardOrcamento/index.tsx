

import style from "./formOrcamento.module.css";

export const CardOrcamento: React.FC = () => {

    return (
    
          <div className={style.containerC}>
      
      <div className={style.titulo}>
      Solicite orçamento de forma simples e rápida. Preencha os formulário.
        </div>
  
          <div className={style.formulario}>
         <form action="https://formsubmit.co/cidamunizz2015@gmail.com"
            method="POST">
         
         <input type="hidden" name="_captcha" value="false" />
      
                <input
              className={style.input}
              type="text"
              name="nome"
              placeholder="Nome"
              required
            />
                <input
              className={style.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
  
        <input
              className={style.input}
              type="number"
              name="telefone"
              placeholder="Telefone"
              required
            />
                 <input
              className={style.input}
              type="text"
              name="estado"
              placeholder="Estado"
              required
            />
                <input
              className={style.input}
              type="text"
              name="cidade"
              placeholder="Cidade"
              required
            />
          <input
              className={style.menssage}
              type="text"
              name="messagem"
              placeholder="Qual a sua necessidade"
              required
            />
          
            <input
              type="hidden"
              name="_next"
          
              value="https://enerjuz.netlify.app/obrigada"
            />
            <input className={style.button} type="submit" value="ENVIAR" />
          </form>
            
  
     
        </div>
        </div>
    
    );
    }
  
  
  