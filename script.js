const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const contenedor = documentQuerySelector("#contenedor")

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const productosArray = [
  {
    id: "Tabla Ejecutiva",
    titulo:"Tabla Ejecutiva",
    imagen:"(./assets/tabla-1.jpeg)",
    precio: 13000,
  },
  {
    id: "Tabla Individual",
    titulo:"Tabla Individual",
    imagen:"(./assets/tabla-2.jpg)",
    precio: 2500,
  },
  {
    id: "Tabla para dos",
    titulo:"Tabla para dos",
    imagen: "(./assets/tabla-3.jpg)",
    precio: 4550,
  },
  {
    id: "Tabla sorpresa",
    titulo:"Tabla Sorpresa",
    imagen: "(./assets/tabla-4.jpg)",
    precio: 3800,
  }
];

function cargarProductos(){
productosArray.forEach(producto => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `<div class="imagen-carta car-1">${producto.imagen}</div>
  <div class="producto-detalles">
      <h3 class="producto-titulo">${producto.titulo}</h3>
      <p class="producto-precio">${producto.precio}</p>
      <button class="producto-agregar" id="${producto.id}">Agregar</button>
  </div>`;
  contenedor.append(div)
})
}
cargarProductos();