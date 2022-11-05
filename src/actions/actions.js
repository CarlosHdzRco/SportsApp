export const updateLeagueId = (id) => {
    return {
        type: 'UPDATE_LEAGUE_ID',
        id
    }
}

export const addStandings = (id, standingsList) => {
    return {
        type: 'ADD_STANDINGS',
        id,
        standingsList
    }
}

export const updateLeagueInfo = (leagueInfo) => {
    return {
        type: 'UPDATE_LEAGUE_INFO',
        leagueInfo
    }
}

export const addStatistics = (statistics) => {
    return {
        type: 'ADD_STATISTICS',
        statistics
    }
}