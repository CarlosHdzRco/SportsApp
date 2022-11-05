export const reducer = (state, action) => {
    
    //create state if not defined yet
    if(state === undefined) {
        state = {
            standings: {league: 0, standingsList: []},
            statistics: {league: 0, playerList: []},
            matches: {league: 0, matchesList: []},
            leagueInfo: {},
            leagueId: '39'
        }
    }

    switch(action.type) {
        
        case 'UPDATE_LEAGUE_ID':
            return {
                ...state,
                leagueId: action.id
            }
        case 'UPDATE_LEAGUE_INFO':
            return {
                ...state,
                leagueInfo: action.leagueInfo
            }
        case 'ADD_STANDINGS':
            // console.log('reducer: ',action.id)
            // console.log('reducer: ',action.standingsList )
            return {
                ...state,
                standings: {league: action.id, standingsList: action.standingsList}
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