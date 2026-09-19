// este simuproductor de abm de productos

function isnotEmpty(valor) {
  
    return valor !== '' && valor !== null ;
}       
const imprimirPorConsola = (Msg) => 
    {
    console.log(Msg);
}

function imprimirArray(productos){
    let i = 0;
    for (const producto of productos) { 
        imprimirPorConsola("producto[" + i + "]:" + producto);
        i++;
    }
}



imprimirPorConsola("simula ser un ABM de productos");

const productos= ["mouse", "teclado", "monitor", "auriculares", "impresora"];
let continuar = true ;
let producto = "";  
let newProducto = "";
let opcion = 0;
let indice = -1;
while (continuar) {
    imprimirPorConsola("Por favor ingrese la función que desea hacer");
    imprimirPorConsola("1: alta de producto");
    imprimirPorConsola("2: baja de producto");
    imprimirPorConsola("3: listar productos disponibles");
    imprimirPorConsola("4: Alta producto PRIORITARIO");
    imprimirPorConsola("5: Actualizar producto");
    imprimirPorConsola("6: eliminar ultimo producto");
    imprimirPorConsola("7: eliminar primer producto");
    
    opcion = prompt("ingrese la opción");
    switch (opcion) {
        case  "1":
            producto = prompt("ingrese el producto a dar de alta");
            if (isnotEmpty(producto)){ 
                productos.push(producto);
                imprimirArray(productos);
            }
            else
                imprimirPorConsola("dato no valido");
            break;

        case "2":
            imprimirPorConsola("productos en stock");
            imprimirArray(productos);            
            producto = prompt("ingrese el producto que quiere dar de baja");
            if (isnotEmpty(producto)) {
                
                console.log(indice)
                if (productos.includes(producto)) { 
                    imprimirPorConsola("encontre producto")
                    indice = productos.indexOf(producto);
                    productos.splice(indice,1);
                    imprimirPorConsola(`se dio de baja el producto "${producto}" `)
                    imprimirArray(productos);
                }
                else {
                    imprimirPorConsola("producto no encontrado");    
                }
            }
            else {
                imprimirPorConsola("dato no valido");
            }
            break;
        case "3":
            imprimirPorConsola("productos en stock");
            imprimirArray(productos);
            break;
        case  "4":
            producto = prompt("ingrese el producto PRIORITARIO a dar de alta");
            if (isnotEmpty(producto)){ 
                productos.unshift(producto);
                imprimirArray(productos);
            }
            else
                imprimirPorConsola("dato no valido");
            break;
         case  "5":
            imprimirPorConsola("productos en stock");
            imprimirArray(productos);    
            producto = prompt("ingrese el producto que desea actualizar");
            if (isnotEmpty(producto)){ 
                indice = productos.indexOf(producto)
                if (indice !== -1) { 
                    newProducto = prompt("ingrese el producto nuevo");
                    productos.splice(indice,1, newProducto);
                    imprimirPorConsola("productos actualizados")
                    imprimirArray(productos);
                }
                else {
                    imprimirPorConsola("producto no encontrado");    
                }
            }
            else
                imprimirPorConsola("dato no valido");
            break;  
            case  "6":
                producto = productos.pop() 
                imprimirPorConsola(`se dio de baja el producto "${producto}" `);
            break;
            case  "7":
                producto = productos.shift() 
                imprimirPorConsola(`se dio de baja el producto "${producto}" `);
            break;  
        default:
            imprimirPorConsola("opción no valida")
            break;
  } 
  continuar=confirm("desea continuar?");
}