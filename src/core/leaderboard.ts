import {Player} from "../interfaces/player";

const byScore = (players: Player[]) => players.slice().sort((a, b) => b.score - a.score);
const byIndex = (players: Player[]) => players.map((player, index) => ({...player, position: index + 1}));
const tied = (players: Player[]) => {
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
const byName = (players: Player[]) => players.slice().sort((a, b) => a.name.localeCompare(b.name));

export function leaderboard(players: Player[]) {
    const sortedPlayers = byScore(players),
        changePosition = byIndex(sortedPlayers),
        groupedPlayers = tied(changePosition);
    return byName(groupedPlayers);
}