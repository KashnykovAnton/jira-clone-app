import axios from "axios";

// const BASE_URL = "http://localhost:3030/";

// axios("config.json").then(({ data }) => {

const {REACT_APP_BASE_URL, REACT_APP_PORT} = process.env;
axios.defaults.baseURL = REACT_APP_BASE_URL + ':' + REACT_APP_PORT;
console.log(axios.defaults.baseURL);
// axios.defaults.port = REACT_APP_PORT;

export async function fetchCards() {
  const { data } = await axios(`cards`);
  return data;
}

export async function fetchCardById(id) {
  const { data } = await axios(`cards/${id}`);
  return data;
}

export async function fetchAddCard(card) {
  const { data } = await axios.post(`cards`, card);
  return data;
}

export async function fetchDeleteCard(id) {
  const { data } = await axios.delete(`cards/${id}`);
  return data;
}

export async function fetchUpdateCard(id, card) {
  const { data } = await axios.put(`cards/${id}`, card);
  return data;
}