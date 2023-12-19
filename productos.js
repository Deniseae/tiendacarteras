//descripcion y stock de mi lista de productos
let productos =[{
    nombre: "Bandolera",
    precio: 8000,
    stock : 15,
},{
    nombre: "Bolso",
    precio: 12000,
    stock : 8, 
},{
    nombre: "Billetera",
    precio: 5000,
    stock : 30,
},{
    nombre: "Mochila",
    precio: 17000,
    stock : 0,
}]

let productosEnStock =[];
for (let producto of productos){
   if(producto.stock > 0) {
    productosEnStock.push(producto);
   }
}
console.log(productosEnStock);