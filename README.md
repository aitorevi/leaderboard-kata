# Leaderboard kata

- Ranking en orden de puntuación
    - Alex  900  ->  1  Ana  1000
    - Ana  1000  ->  2  Alex  900
    - Luisa 200  ->  3  Juana 500
    - Juana 500  ->  4  Luisa 200
- En caso de empate se ordena en orden alfabético
    - Ana  1000  ->  1  Ana  1000
    - Juana 500  ->  2  Alex  500
    - Alex  500  ->  3  Juana 500
    - Luisa 200  ->  4  Luisa 200
- En caso de empate los jugadores empatados ocuparán la misma posición y los siguientes clasificados deben estar en
  la posición que les correspondería en caso de no haber empate
    - Alex  500  ->  1  Ana  1000
    - Ana  1000  ->  2  Alex  500
    - Juana 500  ->  2  Juana 500
    - Luisa 200  ->  4  Luisa 200