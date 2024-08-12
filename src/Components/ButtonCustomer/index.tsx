import './style.css';

import zap from'../../assets/Img/zapmini.png';



export const ButtonCustomer: React.FC = () => {
  return(
    <div className="containerzap">
        <a target="_blank" rel="noreferrer" href="https://wa.me/5537998669261">
    <div className="pulsar">
   
  
     <img src={zap} alt='zap'/>
      </div>
      </a>
      </div>
  );
}
