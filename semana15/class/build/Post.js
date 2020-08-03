"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(author, text) {
        this.likes = 0;
        this.getAuhtor = () => this.author;
        this.getText = () => this.text;
        this.getLikes = () => this.likes;
        this.author = author;
        this.text = text;
    }
    like() {
        this.likes++;
    }
    editAuthor(newName) {
        this.author = newName;
    }
}
exports.default = Post;
