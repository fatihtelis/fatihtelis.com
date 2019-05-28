import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import Section from '../../../../components/Section';
import { container, colors } from '../../../../style/theme';

const cv = '/static/cv/fatih-telis_cv.pdf';

const Cv = ({ active }) => (
  <Section active={active}>
    <Screen flexDirection="column" alignItems="center">
      <Flex className="actions">
        <a
          className="action"
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          title="Fatih Telis CV"
        >
          <span className="bx bx-show-alt" />
          <div>view</div>
        </a>
        <a
          className="action"
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          title="Fatih Telis CV"
          download
        >
          <span className="bx bx-download" />
          <div>download</div>
        </a>
      </Flex>
    </Screen>
  </Section>
);
const Screen = styled(Flex)`
  ${container};
  padding: 40px 0;
  .actions {
    .action {
      width: 120px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 16px;
      font-weight: 600;
      background-color: white;
      border-radius: 3px;
      margin: 30px auto;
      color: ${colors.font};
      text-decoration: none;
      transition: 0.25s;
      margin: 0 20px;
      &:hover {
        background-color: #f5f5f5;
        transform: translateY(-3px);
      }
      .bx {
        font-size: 48px;
        margin-bottom: 10px;
      }
    }
  }
`;

export default Cv;
