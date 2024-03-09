document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "5543998669972";

  const cliente = document.querySelector("#cliente").value;
  const datanasc = document.querySelector("#data_nascimento").value;
  const titulo = document.querySelector("#titulo").value;
  const ecivil = document.querySelector("#ecivil").value;
  const endereco = document.querySelector("#endereco").value;
  const bairro = document.querySelector("#bairro").value;
  const cidade = document.querySelector("#cidade").value;
  const telefone = document.querySelector("#telefone").value;
  const profissao = document.querySelector("#profissao").value;
  const tipoconta = document.querySelector("#tipoconta").value;
  const banconome = document.querySelector("#banconome").value;
  const agencia = document.querySelector("#agencia").value;
  const conta = document.querySelector("#conta").value;
  const tipodep1 = document.querySelector("#tipodep1").value;
  const nomedep1 = document.querySelector("#nomedep1").value;
  const datadep1 = document.querySelector("#datadep1").value;
  const cpfdep1 = document.querySelector("#cpfdepe1").value;
  const tipodep2 = document.querySelector("#tipodep2").value;
  const nomedep2 = document.querySelector("#nomedep2").value;
  const datadep2 = document.querySelector("#datadep2").value;
  const cpfdep2 = document.querySelector("#cpfdepe2").value;
  const tipodep3 = document.querySelector("#tipodep3").value;
  const nomedep3 = document.querySelector("#nomedep3").value;
  const datadep3 = document.querySelector("#datadep3").value;
  const cpfdep3 = document.querySelector("#cpfdepe3").value;
  const tipodep4 = document.querySelector("#tipodep4").value;
  const nomedep4 = document.querySelector("#nomedep4").value;
  const datadep4 = document.querySelector("#datadep4").value;
  const cpfdep4 = document.querySelector("#cpfdepe4").value;
  const nomeal1 = document.querySelector("#nomeal1").value;
  const dataal1 = document.querySelector("#dataal1").value;
  const cpfal1 = document.querySelector("#CPFal1").value;
  //const dival1 = document.querySelector("#dival1").value;
  //const veiculo = document.querySelector("#veiculo").value;
  //const imovel = document.querySelector("#imovel").value;
  //const container2 = document.querySelector("#container2").value;
  //const hora = document.querySelector("#hora").value;
  //const empleado = document.querySelector("#empleado").value;
  //const servicio = document.querySelector("#servicio").value;
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_DECLARAÇÃO DE IMPOSTO DE RENDA_*%0A
		*Dados necessários*%0A%0A
		*Nome completo*%0A
		${cliente}%0A
		*Data de nascimento*%0A
		${datanasc}%0A
		*_Título de eleitor_*%0A
		${titulo}%0A
		*Endereço*%0A
		${endereco}%0A
		*_Tipo de conta_*%0A
		${tipoconta}%0A 
    *Estado civil*%0A
    ${ecivil}%0A 
    *Bairro*%0A
    ${bairro}%0A 
    *Cidade*%0A
    ${cidade}%0A
    *Telefone*%0A 
    ${telefone}%0A 
    *_Profissão_*%0A
    ${profissao}%0A 
    *Banco*%0A
    ${banconome}%0A 
    *_Agência_*%0A
    ${agencia}%0A 
    *Conta*%0A
    ${conta}%0A 
    *Tipo de dependente 1*%0A
    ${tipodep1}%0A 
    *Nome dependente 1*%0A
    ${nomedep1}%0A 
    *Data de nascimento dependente 1*%0A
    ${datadep1}%0A 
    *CPF dependente 1*%0A
    ${cpfdep1}%0A
    ${tipodep2}%0A 
    *Nome dependente 2*%0A
    ${nomedep2}%0A 
    *Data de nascimento dependente 2*%0A
    ${datadep2}%0A 
    *CPF dependente 2*%0A
    ${cpfdep2}%0A 
    ${tipodep3}%0A 
    *Nome dependente 3*%0A
    ${nomedep3}%0A 
    *Data de nascimento dependente 3*%0A
    ${datadep3}%0A 
    *CPF dependente 3*%0A
    ${cpfdep3}%0A 
    ${tipodep4}%0A 
    *Nome dependente 4*%0A
    ${nomedep4}%0A 
    *Data de nascimento dependente 4*%0A
    ${datadep4}%0A 
    *CPF dependente 4*%0A
    ${cpfdep4}%0A 
    *Nome*%0A
    ${nomeal1}%0A 
    *_Data de nascimento_*%0A
    ${dataal1}%0A 
    *_CPF_*%0A
    ${cpfal1}%0A
    `;

  if (cliente === "" || datanasc === "" || titulo === "" || endereco === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltam alguns dados, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Os seus dados foram enviados com sucesso, muito obrigado, ${cliente}`;

  window.open(url);
});
