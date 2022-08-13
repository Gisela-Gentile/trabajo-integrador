let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let descuento = document.getElementById("btn-descuento");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let verDescueto = document.getElementById("descuento");
let vaciar = document.getElementById("vaciar");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;

//FUNCIONES PARA EVENTOS
const agregarAlCarrito = (): void => {
  //metodo push para agregar un elemento al final arreglo
  productos.push(producto.value);
  precios.push(Number(precio.value));

  lista?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;
  //sumar productos
  suma = 0;
  for (let i: number = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
    total?.innerHTML = suma;
  }

  //vaciar los campos de entrada
  producto.value = "";
  precio.value = "";
};

const calcularDescuento = (): void => {
  let montoApagar: number = 0;
  if (suma > 2500) {
    montoApagar = suma * 0.9;
    verDescueto.innerHTML = `Usted tiene un descuento del 10% y debe pagar $ ${montoApagar.toFixed(
      2
    )}`;
  } else {
    verDescueto.innerHTML = `No tiene descuento`;
  }
};
const vaciarLista = (): void => {
  lista.innerHTML = "";
  total.innerHTML = "";
  verDescueto.innerHTML = "";
  precios = [];
  productos = [];
};

//AGREGAMOS EVENTOS A LOS BOTONES
agregar?.addEventListener("click", agregarAlCarrito);
descuento?.addEventListener("click", calcularDescuento);
vaciar?.addEventListener("click", vaciarLista);
