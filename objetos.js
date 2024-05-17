const producto = {
  nombre: "celular",
  precio: 1000,
  stock: 12,
};

console.log(producto);

producto.id = "123cel";
  producto.foto =
    "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/s/m/sm-s918_sm-r930nzkalta-members_1.png";

producto["detalle"] = "escribir el detalle del celular";
  producto["color"] = "negro";

console.log(producto);


delete producto ["id"]
delete producto.detalle

console.log(producto)

console.log(producto.nombre);
console.log(producto["foto"])