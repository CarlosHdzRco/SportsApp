export const reducer = (state, action) => {
    
    //create state if not defined yet
    if(state === undefined) {
        state = {
            standings: [],
            leagueInfo: {league: 0}
        }
    }

    switch(action.type) {
        
        case 'UPDATE_LEAGUE_INFO':

            // console.log('reducer: ',action.leagueInfo)
            return {
                ...state,
                leagueInfo: action.leagueInfo
            }
        case 'ADD_STANDINGS':
            return {
                ...state,
                standings: action.standings
            }
        default:
            return state;
    }
}