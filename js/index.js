const contenedorTarjetas = document.getElementById('productos-container');
function crearTarjetas(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement('div');
        nuevoProducto.classList = 'tarjeta-producto';
        nuevoProducto.innerHTML = `
        <img src='./img/productos/${producto.id}.jpeg'>
        <h3 class='titulo'>${producto.nombre}<h3/>
        <p class='descripcion'>${producto.descripcion}<p/>
        <p class='precio'>$${producto.precio}<p/>
        <button>Agregar al carrito<button/>`
        contenedorTarjetas.appendChild(nuevoProducto);

    });
}

crearTarjetas(productos);

