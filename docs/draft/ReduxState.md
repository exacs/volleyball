# The shape of the Redux State

```
state = {
  match
}
```

# match object.

```
match = {
  winner: [ 'home' | 'away' | null ],
  points: array<Round>,
  history: array<HistoryEntry>
}
```

## `match.winner : [ 'home' | 'away' | null ]`

The winner of the match. Can have three values: `'home'`, `'away'` or `null`. A `null` value means that the match has not ended yet.

## `match.points : array<Round>`

Represents the points earned by each team in every round (set). Is an array of `Round` objects representing the result of each round. The first element of the array is the first round and so on.

This is the shape of the `Round` object:

```
Round : {
  home: number,
  away: number,
  winner: [ 'home' | 'away' | null ]
}
```

Where `home` and `away` are the points achieved by each team in the set and `winner` is the winner of the set (`null` means that the round has not finished yet).

## `match.history : array<HistoryEntry>`

Represents every relevant action recorded of the match. Is an array of `HistoryEntry` objects sorted chronologically (first element is the oldest action). Relevant action includes:

- A team has achieved a point.
- A time-out has been given to a team.

The `HistoryEntry` type has the following shape:

```
HistoryEntry : {
  time: number,
  feature: ['home' | 'away'],
  previous: array<Round>
}
```

Where `time` is the number of minutes from the beginning of the match to the action; `feature` is the team featuring the action and `previous` is the `state.points` property before this action has been commited.
