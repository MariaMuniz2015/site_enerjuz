


import style from "./form.module.css";


export const CardOrcamentoUsina: React.FC = () => {
  return (
  
        <div className={style.container}>
    
    <div className={style.titulo}>
        Preencha o formulário e descubra quanto vc pode economizar.
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
          />
              <input
            className={style.input}
            type="email"
            name="email"
            placeholder="Email"
          />

      <input
            className={style.input}
            type="number"
            name="telefone"
            placeholder="Telefone"
          />
               <input
            className={style.input}
            type="text"
            name="estado"
            placeholder="Estado"
          />
              <input
            className={style.input}
            type="text"
            name="cidade"
            placeholder="Cidade"
          />
                 <input
            className={style.input}
            type="number"
            name="energia"
            placeholder="Conta de energia"
          />
        
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/obrigada"
          />
          <input className={style.button} type="submit" value="ECONOMIZAR AGORA" />
        </form>
          

   
      </div>
      </div>
  
  );
  }