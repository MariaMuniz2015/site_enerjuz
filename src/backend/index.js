const express = require('express')
const app = express()



app.get("/send email", async (req, res)=> {
return res.json({
  erro:false,
  mensagem: "Email enviado com sucesso!"
})
/*return res.status(400).json({
  erro:true,
  mensagem: "Email não enviado com sucesso"
});*/
});
app.listen(3000, () => {
  console.log("nodemailerProject is listening at http://localhost:3000")

});