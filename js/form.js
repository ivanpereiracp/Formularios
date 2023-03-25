document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "5543998669972";

  const cliente = document.querySelector("#cliente").value;
  const titulo = document.querySelector("#Titulo").value;
  const endereco = document.querySelector("#Endereco").value;
  const fecha = document.querySelector("#fecha").value;
  const hora = document.querySelector("#hora").value;
  const empleado = document.querySelector("#empleado").value;
  const servicio = document.querySelector("#servicio").value;
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_DECLARAÇÃO DE IMPOSTO DE RENDA_*%0A
		*Dados necessários*%0A%0A
		*Nome completo*%0A
		${cliente}%0A
		*Data de nascimento*%0A
		${fecha}%0A
		*_Título de eleitor_*%0A
		${titulo}%0A
		*_Endereço_*%0A
		${endereco}%0A
		*Indica la hora de tu reserva*%0A
		${hora}%0A
		*Empleado de preferencia*%0A
		${empleado}%0A
		*¿Cuál es el servicio que se desea realizar?*%0A
		${servicio}`;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
