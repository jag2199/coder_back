const res = require("express/lib/response")
const fs = require("fs")

class Container {
    constructor(nom) {
        this.nombre = nom
    }

    getAll() {
        try {
            const result = fs.readFileSync(this.nombre)
            const resultParse = JSON.parse(result)
            return resultParse
        }
        catch (err) {
            console.log(err)
        }
    }

    getRandom() {
        try {
            const content = this.getAll()
            let indiceRandom = Math.floor(Math.random() * content.length)
            return content[indiceRandom]
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = Container

// async save(object) {
    //     try {
    //         const content = await this.getAll()
    //         console.log("content es ", content)
    //         object["id"] = content.length ? ((content[content.length - 1].id) + 1) : 1
    //         console.log(object.title)
    //         // const contenido = content === "" ? [object] : [...content, object]
    //         // fs.writeFileSync(this.nombre, JSON.stringify(contenido), "utf8")
    //         return object.id
    //     }
    //     catch (err) {
    //         console.error(err)
    //     }
    // }

    // async getByID(id) {
    //     const content = await this.getAll()
    //     return new Promise((res, rej) => {
    //         if (id > content.length) {
    //             rej(null)
    //         }
    //         res(content[`${id}`])
    //     })
    // }

// async deleteByID(id) {
    //     try {
    //         const content = await this.getAll()
    //         let i = content.indexOf(id)
    //         content.splice(i, 1)
    //         fs.writeFile(this.nombre, JSON.stringify([...content, object]))
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }
    // async deleteAll() {
    //     try {
    //         fs.writeFileSync(this.nombre, "", "utf-8")
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

