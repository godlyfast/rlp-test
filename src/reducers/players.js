const players = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PLAYERS_SUCCESS":
      return [...state, ...action.data];
    case "CREATE_PLAYER_SUCCESS":
      return [
        ...state,
        {
          ...action.player
        }
      ];
    case "EDIT_PLAYER_REQUEST":
      return [
        ...state.filter(p => p.id !== action.player.id),
        {
          ...action.player
        }
      ];
    case "DELETE_PLAYER_SUCCESS":
      return [...state.filter(p => p.id !== action.id)];
    default:
      return state;
  }
};

export default players;
