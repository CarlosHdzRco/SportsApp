export const reducer = (state, action) => {
    
    //create state if not defined yet
    if(state === undefined) {
        state = {
            standings: {league: 0, standingsList: []},
            topGoals: {league: 0, playerList: []},
            topAssists: {league: 0, playerList: []},
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
        case 'ADD_GOALS':
            // console.log(action.statisticsList)
            return {
                ...state,
                topGoals: {league: action.id, playerList: action.statisticsList}
            }
        case 'ADD_ASSISTS':
            // console.log(action.statisticsList)
            return {
                ...state,
                topAssists: {league: action.id, playerList: action.statisticsList}
            }
        case 'ADD_MATCHES':
            return {
                ...state,
                matches: {league: action.id, matchesList: action.matchesList}
            }

        default:
            return state;
    }
}