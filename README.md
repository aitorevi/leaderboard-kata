# Leaderboard kata

- Ranking en orden de puntuación

**Entrada**:
```
[
{name: 'Alex', score: 900},
{name: 'Ana', score: 1000}, 
{name: 'Luisa', score: 200}, 
{name: 'Luisa', score: 500}
]
```
**Resultado**:

|Position|Name|Score|
|--------|----|-----|
|1  |Ana|1000 |
|2  |Alex|900  |
|2  |Juana|900 |
|4  |Luisa|200 |

- Devuelve una lista de jugadores ordenados por puntuación.

- En caso de empate se ordena en orden alfabético

- En caso de empate, los jugadores empatados ocuparán la misma posición y los siguientes clasificados deben estar en
  la posición que les correspondería en caso de no haber empate, por eso "Alex" y "Juana" ocupan los dos la segunda posición
  y "Luisa" la cuarta posición.