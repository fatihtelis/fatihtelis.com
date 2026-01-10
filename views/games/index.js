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
    id: 'wordtype',
    name: 'WordType!',
    icon: '/games/wordtype.png',
    description: `WordType is an engaging mobile game that combines fast-paced typing action with language learning. Players must type words as they fall from the top of the screen before they cross a danger line at the bottom. The game offers two distinct modes: Speed Mode for players who want pure adrenaline and high-score chasing, and Learn Mode which displays translations as you type, allowing players to naturally absorb vocabulary in a new language. With support for five languages—English, German, French, Spanish, and Turkish—players can practice typing in one language while learning translations in another.

The game features 25 carefully designed levels that progressively increase in difficulty, culminating in an endless survival mode at level 25. To keep gameplay exciting, WordType introduces special obstacle words: Golden Words that double your points, Bomb Words that demand quick typing or cost you a heart, Frozen Words that fall slowly for easier catches, Speed Burst words for lightning-fast challenges, and Heal Words that restore lost hearts. The streak system adds another layer of strategy, rewarding consecutive correct words with score multipliers while punishing mistakes by resetting the entire streak.

WordType is designed for a wide audience, from language students seeking fun vocabulary practice to typing enthusiasts chasing personal records, and casual gamers looking for quick brain-training sessions. The game features a 3-heart life system, personal high score tracking per language, smooth animations with haptic feedback, and full offline functionality. With its clean interface and addictive gameplay loop, WordType offers short but replayable sessions that keep players coming back for more.`,
  },
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
    <Layout meta={meta} headerBackground="gray">
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
