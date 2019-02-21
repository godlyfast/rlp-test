import uuidv4 from "uuidv4";
function createData(firstName, lastName, score) {
  return { id: uuidv4(), firstName, lastName, score };
}
export default {
  create({ firstName, lastName, score }) {
    return new Promise(res => res(createData(firstName, lastName, score)));
  },
  async fetchAll() {
    return await (await fetch("players.json")).json();
  },
  delete(id) {
    return new Promise(res => res(id));
  },
  edit(player) {
    return new Promise(res => res(player));
  }
};
