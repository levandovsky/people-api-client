const API_URL = "http://localhost:8080/people-mongo"

export class PeopleApi {
    static async all() {
        const res = await fetch(API_URL);

        return res.json();
    }

    static async add(person) {
        if (!person) throw new Error("No argument");

        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(person)
        })

        return res.json();
    }

    static async delete(id) {
        if (!id) throw new Error("No argument");

        const res = await fetch(`${API_URL}/person/${id}`, {
            method: "DELETE"
        })

        return res.json();
    }
}
