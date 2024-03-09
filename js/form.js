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
  const infoconta = document.querySelector("#infoconta").value;
  const agencia = document.querySelector("#agencia").value;
  const conta = document.querySelector("#conta").value;
  const tipodep1 = document.querySelector("#tipodep1").value;
  const nomedep1 = document.querySelector("#nomedep1").value;
  const datadep1 = document.querySelector("#datadep1").value;
  const cpfdep1 = document.querySelector("#cpfdep1").value;
  const divdep2 = document.querySelector("#divdep2").value;
  const divdep3 = document.querySelector("#divdep3").value;
  const divdep4 = document.querySelector("#divdep4").value;
  const dival1 = document.querySelector("#dival1").value;
  const veiculo = document.querySelector("#veiculo").value;
  const imovel = document.querySelector("#imovel").value;
  const container2 = document.querySelector("#container2").value;
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
    *Alimentando*%0A
    ${dival1}%0A 
    *_Veículo_*%0A
    ${veiculo}%0A 
    *_Imóvel_*%0A
    ${imovel}%0A 
    *_Informações_*%0A
    ${container2}%0A`;

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
