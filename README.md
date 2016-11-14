# Volleyball

Application for scoring a volleyball match.

## Minimum Viable Product definition

The following requirements must be met on version 0.1.x of the app.

- There are two entry points: `/` for spectators; `/referee` for referees.
- Referee can update the match setup:
  - Match information: title and starting date/time.
  - Match rules: number of sets, points per set.
  - Teams: names, short names.
- Referee can, during the match:
  - Give 1 point to a team.
  - Change the sides the teams (left or right).
- The following information is automatically calculated:
  - Sets of each team.
  - Points of each team.
  - History of the match.
- Referee can undo any action
- Spectators can see all the information of the match updated.

## More than one match

**TODO**

The following requirements must be met on version 1.x of the app.

- There are the following RESTful API resources:
  - `/matches`
  - `/users`
- There are several entry points:
  - `/` and `/matches`.  List of all matches.
  - `/matches/:match_id`. Spectator view of the match.
  - `/matches/:match_id/referee`. Referee view of the match.
  - `/matches/new`. Form to create a new match.
- Only a logged in user can create a new match.
- Only the creator of the match can be the referee of it.
