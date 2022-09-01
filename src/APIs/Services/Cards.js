import { HttpClient } from "../HttpClient";

class CardsService extends HttpClient {

    constructor() {

        super("https://jsonplaceholder.typicode.com")
    }

    getAllPosts() {

        return this.get("posts")
    }

    postNewPost(body) {
        
        return this.post("posts", body)
    }
}

export const cardService = new CardsService();