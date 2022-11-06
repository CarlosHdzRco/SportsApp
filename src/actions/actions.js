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

export const addStatistics = (id, statisticsList) => {
    return {
        type: 'ADD_STATISTICS',
        id,
        statisticsList
    }
}

export const addMatches = (id, matchesList) => {
    return {
        type: 'ADD_MATCHES',
        id,
        matchesList
    }
}

export const updateLeagueInfo = (leagueInfo) => {
    return {
        type: 'UPDATE_LEAGUE_INFO',
        leagueInfo
    }
}

