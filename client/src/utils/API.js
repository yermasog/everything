import axios from "axios";

const APIKey = "3a623ea6ade278ada9b6b26990b8755d";

export default {
  //Recall weather
  weather: function (lat, lon) {
    const BASEURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${APIKey}`;
    return axios.get(BASEURL);
  },
  coordinates: function () {
    const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=anoka&appid=${APIKey}`;
    return axios.get(cityURL);
  },

  //=========================
  //TO DO ROUTES

  getToDos: function () {
    return axios.get("/api/todo");
  },

  editToDo: function (id) {
    return axios.get("/api/todo/" + id);
  },

  deleteToDo: function (id) {
    return axios.delete("/api/todo/" + id);
  },

  saveToDo: function (todoData) {
    return axios.post("/api/todo", todoData);
  },
  // Gets all Notes
  getNotes: function () {
    return axios.get("/api/note");
  },
  // Deletes the Note with the given id
  deleteNote: function (id) {
    return axios.delete("/api/note/" + id);
  },
  // Saves a Note to the database
  saveNote: function (noteData) {
    return axios.post("/api/note", noteData);
  },

  // =======================
  //USER ROUTES

  //creates new user in db
  createUser: function (userData) {
    return axios.post("/api/user", userData);
  },
  //find user by email
  findByEmail: function (email) {
    return axios.get("/api/user/" + email)
  },
  //get user
  // getUser: function (email) {
  //   return axios.get("/api/user/" + email) 
  // },
};
