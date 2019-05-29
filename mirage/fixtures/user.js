import contributions from './contribution'

const byUserId = id => contribution => contribution.userId == id
const toId = model => model.id

export default [
  {
    id: '1',
    name: 'Damian Senn',
    website: 'https://www.puzzle.ch/de/blog/articles/author/dsenn',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2016/03/Senn_Damian-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('1')).map(toId),
  },
  {
    id: '2',
    name: 'Daniel Binggeli',
    website: 'https://github.com/drnoa',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Binggeli-Daniel-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('2')).map(toId),
  },
  {
    id: '3',
    name: 'Philipp Gassmann',
    website: 'https://github.com/pgassmann',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/08/Gassmann-Philipp-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('3')).map(toId),
  },
  {
    id: '4',
    name: 'Thomas Philipona',
    website: 'https://github.com/phil-pona',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Philipona-Thomas-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('4')).map(toId),
  },
  {
    id: '5',
    name: 'Daniel Tschan',
    website: 'https://github.com/dtschan',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Tschan-Daniel-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('5')).map(toId),
  },
  {
    id: '6',
    name: 'Pascal Simon',
    website: 'https://github.com/psunix',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Simon-Pascal-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('6')).map(toId),
  },
  {
    id: '7',
    name: 'Max Burri',
    website: 'https://github.com/mburri',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Burri-Max-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('7')).map(toId),
  },
  {
    id: '8',
    name: 'Pascal Zumkehr',
    website: 'https://github.com/codez',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/10/Zumkehr-Pascal-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('8')).map(toId),
  },
  {
    id: '9',
    name: 'Anselm Strauss',
    website: 'https://github.com/amsibamsi',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Strauss-Anselm-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('9')).map(toId),
  },
  {
    id: '10',
    name: 'Philipp Grogg',
    website: 'https://github.com/gro-gg',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/08/Grogg-Philipp-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('10')).map(toId),
  },
  {
    id: '11',
    name: 'Lorenz Bischof',
    website: 'https://github.com/lbischof',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Bischof-Lorenz-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('11')).map(toId),
  },
  {
    id: '12',
    name: 'Roland Studer',
    website: 'https://github.com/rolandstuder',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/08/Studer-Roland-400x300.jpg',
    company: 'Hitobito AG',
    contributionIds: contributions.filter(byUserId('12')).map(toId),
  },
  {
    id: '13',
    name: 'Philipp Matti',
    website: 'https://github.com/phil-matti/vagrant',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Matti-Philipp-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('13')).map(toId),
  },
  {
    id: '14',
    name: 'Mathis Hofer',
    website: 'https://github.com/hupf',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/10/Hofer-Mathis-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('14')).map(toId),
  },
  {
    id: '15',
    name: 'Christoph Raaflaub',
    website: 'https://github.com/chrira',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Raaflaub-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('15')).map(toId),
  },
  {
    id: '16',
    name: 'Janiss Binder',
    website: 'https://github.com/janissbinder',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Binder-Jannis-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('16')).map(toId),
  },
  {
    id: '17',
    name: 'Oliver Gugger',
    website: 'https://github.com/guggero',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/10/Gugger_Oliver-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('17')).map(toId),
  },
  {
    id: '18',
    name: 'Martin Gafner',
    website: 'https://github.com/mgafner',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Gafner-Martin-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('18')).map(toId),
  },
  {
    id: '19',
    name: 'Sandro Beffa',
    website: 'https://github.com/sandroBeffa',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Beffa-Sandro-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('19')).map(toId),
  },
  {
    id: '20',
    name: 'Peter Mumenthaler',
    website: 'https://github.com/pmumenthaler',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Mumenthaler-Peter-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('20')).map(toId),
  },
  {
    id: '21',
    name: 'Simon Fankhauser',
    website: 'https://github.com/plow',
    picture:
      'https://www.puzzle.ch/wp-content/uploads/2015/07/Fankhauser-Simon-400x300.jpg',
    company: 'Puzzle ITC GmbH',
    contributionIds: contributions.filter(byUserId('21')).map(toId),
  },
  {
    id: '22',
    name: 'Stefan Heinemann',
    website: 'senseless.codedump.ch',
    picture: 'https://avatars3.githubusercontent.com/u/430100?v=3&s=460',
    company: 'Adfinis SyGroup AG',
    contributionIds: contributions.filter(byUserId('22')).map(toId),
  },
]
