const fs = require("fs")

class Container {
    constructor(nom) {
        this.nombre = nom
    }

    async save(object) {
        try {
            const content = await this.getAll()
            console.log("content es ", content)
            object["id"] = content.length ? ((content[content.length - 1].id) + 1) : 1
            console.log(object.title)
            // const contenido = content === "" ? [object] : [...content, object]
            // fs.writeFileSync(this.nombre, JSON.stringify(contenido), "utf8")
            return object.id
        }
        catch (err) {
            console.error(err)
        }
    }

    async getByID(id) {
        const content = await this.getAll()
        return new Promise((res, rej) => {
            if (id > content.length) {
                rej(null)
            }
            res(content[`${id}`])
        })
    }

    async getAll() {
        const result = fs.readFileSync(this.nombre, "utf8")
        //  (err, data) => {
        //     if (err) {
        //         console.error(err)
        //         return
        //     }
        //     console.log(data)
        //     return JSON.parse(data)
        // })
        JSON.parse(result)
        console.log("Belgrnao: ", result, typeof (result))

        return result
    }

    async deleteByID(id) {
        try {
            const content = await this.getAll()
            let i = content.indexOf(id)
            content.splice(i, 1)
            fs.writeFile(this.nombre, JSON.stringify([...content, object]))
        }
        catch (err) {
            console.log(err)
        }
    }
    async deleteAll() {
        try {
            fs.writeFileSync(this.nombre, "", "utf-8")
        }
        catch (err) {
            console.log(err)
        }
    }
}
module.exports = Container
// container = new Container("../productos.txt")

// const main = async () => {
//     obj1 = {
//         title: "Belgrano de Cba",
//         price: 400,
//         thumbnail: "aguantebelgrano.lcdll"
//     }
//     let guardarObj1 = await container.save(obj1)
//     console.log(guardarObj1)

//     obj2 = {
//         title: "Pablo Vegetti",
//         price: 700,
//         thumbnail: "belgranoElMasGrandeDeCba.gallinaqliadasa"
//     }
//     let guardarObj2 = await container.save(obj2)
//     console.log(guardarObj2)

//     let productoID = await container.getByID(2)
//     console.log(productoID)

//     console.log(`Todos los productos son: ${JSON.stringify(await container.getAll())}`)

//     await container.deleteById(2)

//     console.log(`Ahora todos los productos son: ${JSON.stringify(await container.getAll())}`)

//     await container.deleteAll()

//     console.log(`Ahora todos los productos son: ${JSON.stringify(await container.getAll())}`)

// }

// main()


