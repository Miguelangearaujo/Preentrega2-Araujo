const productos = [
    { nombre: "huevos", precio: 100 },
    { nombre: "harina", precio: 500 },
    { nombre: "cafe", precio: 250 },
    { nombre: "helado", precio: 300 },
    {nombre: "tallarines", precio: 400},
];

let carrito = []

let seleccion = prompt("Hola desea comprar algun producto si o no")

while( seleccion  !="si" && seleccion != "no"){
    alert(" por favor ingresa si o no")
    seleccion = prompt(" Hola desea comprar algo si o no")
}

if( seleccion =="si"){
    alert(" a continuación nuestra lista de productos")
    let todolosProductos = productos.map(
        (producto) => producto.nombre + "" + producto.precio + "$"
    );
    alert(todolosProductos.join(" --"))

} else if (seleccion == "no"){
  alert("Gracias por venir, hasta pronto")
}

while(seleccion !="no"){
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0 

    if (producto == "huevos" || producto == "harina" || producto== "cafe" ||  
    producto == "helado" || producto =="tallarines"){
      switch(producto)  {
        case "huevos":
        precio = 100   
        break;
        case "harina":
        precio = 500   
        break;
        case "cafe":
        precio = 250   
        break;
        case "helado":
        precio = 300   
        break;
        case "tallarines":
        precio = 400   
        break;
        default:
            break;
        }
        let unidades = parseInt ( prompt("cuantas unidades desea llevar"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else{
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando??")
    
    
    while(seleccion === "no "){
        alert("gracias por su compra, hasta pronto")
        carrito.forEach((carritoFinal) =>{
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        // total a pagar por productos: ${carritoFinal.unidades*carritoFinal.precio}`)
        })
        break;
    }

} 

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0 )
console.log(` el total a pagar por su compra es : ${total}`)









