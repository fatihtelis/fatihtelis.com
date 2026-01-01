import styled from 'styled-components';
import { colors, media } from '../../style/theme';

const GameCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 20px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  ${media.phone`
    flex-direction: column;
    padding: 15px;
  `};
`;

const GameIcon = styled.div`
  width: 200px;
  min-width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-shrink: 0;

  ${media.tablet`
    width: 150px;
    min-width: 150px;
    height: 150px;
  `};

  ${media.phone`
    width: 100%;
    min-width: 100%;
    height: 200px;
    padding: 15px;
  `};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
    border-radius: 12px;
  }
`;

const GameContent = styled.div`
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.phone`
    padding: 20px;
  `};
`;

const GameTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: ${colors.font};
  ${media.phone`
    font-size: 24px;
    margin-bottom: 15px;
  `};
`;

const GameDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #666;
  margin: 0;
  white-space: pre-line;
  ${media.phone`
    font-size: 14px;
    line-height: 1.6;
  `};
`;

export { GameCard, GameIcon, GameContent, GameTitle, GameDescription };
