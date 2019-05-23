import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import Section from '../../../../components/Section';
import { container, colors } from '../../../../style/theme';

const cv = '/static/cv/fatih-telis_cv.pdf';

const Cv = ({ active }) => (
  <Section active={active}>
    <Screen flexDirection="column" alignItems="center">
      <a
        className="download"
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
        title="Fatih Telis CV"
      >
        <div>Download CV</div>
        <span className="bx bx-download" />
      </a>
    </Screen>
  </Section>
);
const Screen = styled(Flex)`
  ${container};
  padding: 40px 0;
  .download {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 600;
    background-color: white;
    border-radius: 3px;
    margin: 30px auto;
    color: ${colors.font};
    text-decoration: none;
    transition: 0.25s;
    &:hover {
      background-color: #f5f5f5;
      transform: translateY(-3px);
    }
    .bx {
      margin-left: 10px;
    }
  }
`;

export default Cv;
