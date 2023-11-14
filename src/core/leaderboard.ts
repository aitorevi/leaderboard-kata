import {PlayerWithPosition} from "interfaces/playerWithPosition";
import {Player} from "../interfaces/player";

const sortByScore = (players: Player[]) => players.slice().sort((a, b) => b.score - a.score);
const addsPositions = (players: Player[]): PlayerWithPosition[] => {
    return players.map((player, index) => {
        const position = index + 1;
        return {...player, position};
    });
};
const groupsTiedPositions = (players: PlayerWithPosition[]) => {
    return players.map((player, index) => {
        const previousPlayer = players[index - 1];
        const playersTied = index > 0 && player.score == previousPlayer.score;
        if (playersTied) {
            return {
                ...player,
                position: previousPlayer.position
            }
        }
        return player
    })
};
const sortByName = (players: Player[]) => players.slice().sort((a, b) => a.name.localeCompare(b.name));

export function leaderboard(players: Player[]) {
    const sortedPlayers = sortByScore(players),
        addedPositionPlayers = addsPositions(sortedPlayers),
        groupedPlayers = groupsTiedPositions(addedPositionPlayers);
    return sortByName(groupedPlayers);
}