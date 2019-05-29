import contributions from './contribution'

const byChallengeId = id => contribution => contribution.challengeId == id
const toId = model => model.id

export default [
  {
    id: '1',
    name: 'Thömus OpenSource Advent Challenge',
    startsOn: '2015-12-01',
    endsOn: '2015-12-24',
    closed: false,
    contributionIds: contributions.filter(byChallengeId('1')).map(toId),
  },
  {
    id: '2',
    name: 'Damians OpenSource Advent Challenge',
    startsOn: '2016-12-01',
    endsOn: '2016-12-24',
    closed: true,
    contributionIds: contributions.filter(byChallengeId('2')).map(toId),
  },
]
