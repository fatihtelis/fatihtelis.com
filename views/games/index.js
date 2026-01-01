import Layout from '../../layout';
import { Navigation, Main } from './style';
import { Container } from '../../style/theme';
import GameItem from '../../components/GameItem';

const meta = {
  title: 'games | fatih telis',
  description: 'Games developed by fatih telis - Block Burner and more',
  ogImage: '/og-image.jpg',
};

const games = [
  {
    id: 'block-burner',
    name: 'Block Burner',
    icon: '/games/block-burner.png',
    description: `Block Burner is a strategic block puzzle game where every move matters. Place blocks on an 8x8 grid, clear rows and columns, and trigger fire effects as you burn through the board.

The game features 25 carefully designed levels, each with only 10 turns. Finishing a level requires planning, precision, and smart use of your resources. This is not a casual endless puzzle — it is a true challenge for players who enjoy difficult and rewarding gameplay.

Use four different weapons to change the flow of the game. Clear a random row, remove a column, destroy a 3x3 area, or burn blocks when the board feels impossible. Choosing the right moment to use a weapon can decide the outcome of a level.

Block Burner combines simple controls with deep strategy. The rules are easy to learn, but mastering the game takes skill and foresight. Every cleared line triggers a satisfying fire animation that makes each success feel powerful.`,
  },
];

const Games = () => {
  return (
    <Layout meta={meta}>
      <Navigation>
        <Container>
          <div className="logo">
            <div className="name">fatih telis</div>
            <div className="title">frontend developer</div>
          </div>
        </Container>
      </Navigation>
      <Main>
        <Container>
          <div className="games-header">
            <h1>Games</h1>
            <p className="subtitle">Strategic puzzles and challenging gameplay experiences</p>
          </div>
          <div className="games-grid">
            {games.map(game => (
              <GameItem key={game.id} game={game} />
            ))}
          </div>
        </Container>
      </Main>
    </Layout>
  );
};

export default Games;

