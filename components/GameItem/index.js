import { GameCard, GameIcon, GameContent, GameTitle, GameDescription } from './style';

const GameItem = ({ game }) => {
  return (
    <GameCard>
      <GameIcon>
        <img src={game.icon} alt={game.name} />
      </GameIcon>
      <GameContent>
        <GameTitle>{game.name}</GameTitle>
        <GameDescription>{game.description}</GameDescription>
      </GameContent>
    </GameCard>
  );
};

export default GameItem;

