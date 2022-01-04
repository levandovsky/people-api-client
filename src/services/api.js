export class PeopleApi {
    static async all() {
        const res = await fetch("http://localhost:8080/people-mongo");

        return res.json();
    }

    static async add(person) {
        if (!person) throw new Error("No argument");

        const res = await fetch("http://localhost:8080/people-mongo", {
            method: "POST",
            type: "application/json",
            body: JSON.stringify(person)
        })

        return res.json();
    }
}
