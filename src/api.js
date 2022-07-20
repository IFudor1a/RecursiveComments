export default class Api {
    static async add(author,comment,parentId) {
        await fetch('http://localhost:5000/api', {
            method: "POST",
            body: JSON.stringify({
                author: author,
                comment: comment,
                parentID: parentId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(
            res => res.json()
        )
    }
    static async delete(id) {
        await fetch('http://localhost:5000/api/delete', {
            method: "POST",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
}