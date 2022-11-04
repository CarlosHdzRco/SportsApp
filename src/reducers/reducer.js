export const reducer = (state, action) => {
    
    //create state if not defined yet
    if(state === undefined) {
        state = {
            standings: [],
            statistics: {league: 0, playerList: []},
            matches: [],
            leagueInfo: {league: 0}
        }
    }

    switch(action.type) {
        
        case 'UPDATE_LEAGUE_INFO':
            return {
                ...state,
                leagueInfo: action.leagueInfo
            }
        case 'ADD_STANDINGS':
            return {
                ...state,
                standings: action.standings
            }
        case 'ADD_STATISTICS':
            console.log(action.statistics)
            return {
                ...state,
                statistics: action.statistics
            }
        default:
            return state;
    }
}