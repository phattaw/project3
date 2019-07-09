import axios from "axios";

export default {
  // Gets all tiles
  getBooks: function() {
    return axios.get("/api/tiles");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/tiles/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/tiles/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/tiles", bookData);
  }
};
