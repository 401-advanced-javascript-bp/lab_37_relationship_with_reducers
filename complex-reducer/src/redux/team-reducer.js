export default (state = [], {type, payload}) => {
  switch(type) {
    case 'TEAM_CREATE':
      return [...state, payload];
    case 'TEAM_UPDATE':
      return null; //come back
    case 'TEAM_DELETE':
      return state.filter(team => team.id !== payload.id);
      default:
        return state;
  }
}