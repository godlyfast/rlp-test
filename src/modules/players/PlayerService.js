import uuidv4 from "uuidv4";
function createData(firstName, lastName, score) {
  return { id: uuidv4(), firstName, lastName, score };
}
let data = [];
export default {
  create({ firstName, lastName, score }) {
    const player = createData(firstName, lastName, score);
    return new Promise(res => res(player));
  },
  async fetchAll() {
    data = await (await fetch("players.json")).json();
    return data;
  },
  delete(id) {
    data = data.filter(o => o.id !== id);
    return new Promise(res => res(id));
  },
  edit(player) {
    return new Promise(res => res(player));
  }
};
