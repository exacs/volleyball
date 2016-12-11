# React Components

## `<Scoreboard rounds teams>`

Shows a full scoreboard of a match.

Props:

* `rounds : array<Round>`. All the rounds of the match.
* `teams: { home: Team, away: Team }`. Information of the teams playing.

Rendered elements:

* `.scoreboard`. Root element
* `.scoreboard__teams`. Both teams
* `.scoreboard__team`. Score of one team.
* `.scoreboard__team--home`. If the team is "home"
* `.scoreboard__team--away`. If the team is "away"

### type `Round`

Stores the results of a round.

```
type Round : {
  home: number,
  away: number,
  winner: [ 'home' | 'away' | null ]
}
```

Where:

* `home`. Points achieved by the home team.
* `away`. Points achieved by the away team.
* `winner`. The winner of the round.

### type `Team`

```
type Team : {
  name: string,
  shortName: string,
}
```

* `name`. Name of the team
* `shortName`. Short name of the team


## `<TeamScore name shortName points home>`

Shows the score of a team in one single round.

Props:

* `name: string`. The name of the team
* `shortName: string`. The short name of the team.
* `points: number`. The points achieved by the team in this round.
* `home: boolean`. True if the team is the "home" team.

Rendered elements:

* `.team-score`. The root element.
* `.team-score__team`. Information of the team.
* `.team-score__team__title`. Title of the team (home or away).
* `.team-score__team__avatar`. Avatar of the team.
* `.team-score__team__avatar--home`. If the avatar is of the "home" team.
* `.team-score__team__avatar--away`. If the avatar is of the "away" team.
* `.team-score__team__abbr`. Short name of the team.
* `.team-score__team__name`. Name of the team.
* `.team-score__team__points`. Points earned by the team.

## `<Timeline history, undo, inverted>`

Shows a timeline of events happened during the match.

Props:

* `history: array<Action>`. The history of actions.
* `undo?: () => void` (*optional*). A function to be called when "undo" button is clicked.
* `inverted: boolean`. False if "home" team must be rendered in the left.

The `undo` argument is optional. If none is given, then no "undo" button is shown.

Rendered elements:

* `.timeline`. The root element.
* `.timeline__list`. The list of items.
* `.timeline__item`. Each item of the timeline list.

## `<TimelineEntry feature, time, points, undo, inverted>`

Shows an event happened during the match.

Props

* `feature: ['home', 'away', null]`. The team who starred the event.
* `time: number`. Minutes from the beginning of the match to this event.
* `points: { home: number, away: number }`. Points of each team after the event.
* `undo?: () => void` (*optional*). A function to be called to undo this event.
* `inverted: boolean`. True to show "away" info on the left and "home" on the right.

Rendered elements:

* `.timeline-entry`. The root element
* `.timeline-entry__node`. The central node with the minutes inside.
* `.timeline-entry__label`. Each of the labels (1 in the left, 1 in the right of the node)
* `.timeline-entry__label--left`. Left-side label.
* `.timeline-entry__label--right`. Right-side label.
* `.timeline-entry__label__title`. The title of each label.
* `.timeline-entry__label__points`. The points of each label.