import {leaderboard} from "../core/leaderboard";
import {Player} from "../interfaces/player";

describe("leaderboard", () => {
    it("has a players", () => {
        const players : Player[] = [{name: "Alex", score: 1000},{name: "Blas",score: 900}]
        expect(leaderboard(players)).toHaveLength(2)
        expect(leaderboard(players)).toContainEqual({name: "Alex", score: 1000, position: 1});
        expect(leaderboard(players)).toContainEqual({name: "Blas", score: 900, position: 2});
    })
    it("has a players sort by score", () => {
        const players: Player[] = [{name: "Blas", score: 900},{name: "Alex",score: 1000}]
        const expectedLeaderboard: Player[] = [{name: "Alex",score: 1000, position: 1},{name: "Blas", score: 900, position: 2}];
        expect(leaderboard(players)).toEqual(expectedLeaderboard)
    })
    it("has a players with position", () => {
        const players: Player[] = [{name: "Alex",score: 1000},{name: "Blas", score: 900}]
        const expectedLeaderboard: Player[] = [{name: "Alex",score: 1000, position: 1},{name: "Blas", score: 900, position: 2}];
        expect(leaderboard(players)).toEqual(expectedLeaderboard)
    })
    it("you have tied players, change your position for the same one", () => {
        const players : Player[] = [{name: "Alex",score: 1000, position: 1},{name: "Blas", score: 1000, position: 2}]
        const expectedLeaderboard: Player[] = [{name: "Alex",score: 1000, position: 1},{name: "Blas", score: 1000, position: 1}];
        expect(leaderboard(players)).toEqual(expectedLeaderboard)
    })
    it("you have tied players sort by name", () => {
        const players : Player[] = [{name: "Blas",score: 1000, position: 1},{name: "Alex", score: 1000, position: 1}]
        const expectedLeaderboard: Player[] = [{name: "Alex",score: 1000, position: 1},{name: "Blas", score: 1000, position: 1}];
        expect(leaderboard(players)).toEqual(expectedLeaderboard)
    })
    it("check a complex case", () => {
        const players : Player[] = [
            {name: "Blas",score: 900},
            {name: "Alex", score: 1000},
            {name: "Ana", score: 900},
            {name: "Julia", score: 500}
        ]
        const expectedLeaderboard: Player[] = [
            {name: "Alex",score: 1000, position: 1},
            {name: "Ana", score: 900, position: 2},
            {name: "Blas", score: 900, position: 2},
            {name: "Julia", score: 500, position: 4}
        ];
        expect(leaderboard(players)).toEqual(expectedLeaderboard)
    })
})