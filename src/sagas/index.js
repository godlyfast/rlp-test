import { call, put, takeLatest } from "redux-saga/effects";
import PlayerService from "../modules/players/PlayerService";

function* fetchPlayers(action) {
  try {
    const data = yield call(PlayerService.fetchAll);
    yield put({ type: "FETCH_PLAYERS_SUCCESS", data });
  } catch (e) {
    yield put({ type: "FETCH_PLAYERS_FAIL", message: e.message });
  }
}

function* createPlayer(action) {
  try {
    const player = yield call(PlayerService.create, action.player);
    yield put({ type: "CREATE_PLAYER_SUCCESS", player });
  } catch (e) {
    console.log(e);
    yield put({ type: "CREATE_PLAYER_FAIL", message: e.message });
  }
}

function* deletePlayer(action) {
  try {
    const id = yield call(PlayerService.delete, action.id);
    yield put({ type: "DELETE_PLAYER_SUCCESS", id });
  } catch (e) {
    yield put({ type: "DELETE_PLAYER_FAIL", message: e.message });
  }
}

function* editPlayer(action) {
  try {
    const player = yield call(PlayerService.edit, action.player);
    yield put({ type: "EDIT_PLAYER_SUCCESS", player });
  } catch (e) {
    yield put({ type: "EDIT_PLAYER_FAIL", message: e.message });
  }
}

function* fetchPlayersSaga() {
  yield takeLatest("FETCH_PLAYERS_REQUEST", fetchPlayers);
  yield takeLatest("CREATE_PLAYER_REQUEST", createPlayer);
  yield takeLatest("DELETE_PLAYER_REQUEST", deletePlayer);
  yield takeLatest("EDIT_PLAYER_REQUEST", editPlayer);
}

export default fetchPlayersSaga;
