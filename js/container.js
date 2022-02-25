const fs = require("fs")

class Container {
    constructor(nom) {
        this.nombre = nom
    }
    async save(object) {
        try {
            const content = await this.getAll()
            object["id"] = (content[content.length - 1].id) + 1
            fs.writeFileSync("../productos.txt", JSON.stringify([...content, object]))
        }
        catch (err) {
            console.error(err)
        }
    }
    async getByID(id) {
        try {
            const content = await this.getAll()
            return new Promise((res, rej) => {
                if (id > content.length) {
                    rej(null)
                }
                res(content[`${id}`])
            })

        }
        catch (err) {
            console.log(null)
        }
    }
    async getAll() {
        try {
            return JSON.parse(fs.readFileSync(this.nombre))
        }
        catch (err) {
            console.error(err)
        }
    }
    async deleteByID(id) {
        try {
            const content = await this.getAll()
            let i = content.indexOf(id)
            content.splice(i, 1)
            fs.writeFileSync("../productos.txt", JSON.stringify([...content, object]))
        }
        catch (err) {
            console.log(err)
        }
    }
    async deleteAll() {
        try {
            fs.writeFileSync("../productos.txt", "")
        }
        catch (err) {
            console.log(err)
        }
    }
}

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


