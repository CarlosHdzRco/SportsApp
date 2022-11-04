export const addStandings = (standings) => {
    return {
        type: 'ADD_STANDINGS',
        standings
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