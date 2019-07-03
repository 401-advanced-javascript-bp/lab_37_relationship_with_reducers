const defaultState = {};

export default (state = defaultState, {type, payloa}) => {
    let updatedState = null;
    let teamId = null;
    let teamPlayer = null;
    let targetPlayerId = null;

    switch(type){
      case 'TEAM_CREATE':
        return { ...state, [payload.id]:[]};

        
    }

}