const Container = require("./container")
container = new Container("../productos.txt")

const main = async () => {
    obj1 = {
        title: "Belgrano de Cba",
        price: 400,
        thumbnail: "aguantebelgrano.lcdll"
    }
    let guardarObj1 = await container.save(obj1)
    console.log(guardarObj1)

    obj2 = {
        title: "Pablo Vegetti",
        price: 700,
        thumbnail: "belgranoElMasGrandeDeCba.gallinaqliadasa"
    }
    let guardarObj2 = await container.save(obj2)
    console.log(guardarObj2)

    let productoID = await container.getByID(2)
    console.log(productoID)

    console.log(`Todos los productos son: ${JSON.stringify(await container.getAll())}`)

    await container.deleteById(2)

    console.log(`Ahora todos los productos son: ${JSON.stringify(await container.getAll())}`)

    await container.deleteAll()

    console.log(`Ahora todos los productos son: ${JSON.stringify(await container.getAll())}`)

}

main()






// class Usuario {
//     constructor(nombre, apellido, libros, mascotas) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.libros = libros
//         this.mascotas = mascotas
//     }
//     getFullName() {
//         return `${this.nombre} ${this.apellido} `
//     }
//     addMascota(mascota) {
//         this.mascotas.push(mascota)
//     }
//     countMascotas() {
//         return this.mascotas.length
//     }
//     addBook(nom, au) {
//         this.libros.push({ nombre: nom, autor: au })
//     }
//     getBookNames() {
//         return this.libros.map(libro => libro.nombre)
//     }
// }
// a = new Usuario("Pablo", "Vegetti", [{ nombre: "1984", autor: "George Orwell" }], ["Instituto", "Racing", "Gayeres"])
// let nomCom = a.getFullName()
// a.addBook("Como le digo a mi mujer", "Toobyeja Henthanga")
// a.addMascota("Riber")
// let cantMasc = a.countMascotas()
// let nomLibros = a.getBookNames()
// alert(`Nombre completo: ${nomCom}\nCantidad de mascotas: ${cantMasc}\nLibros: ${[...nomLibros]}`)