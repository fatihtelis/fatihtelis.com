import { Flex } from '@rebass/grid';
import Screen from './style';
import Section from '../../../../components/Section';

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
          title="Fatih Telis CV View"
        >
          <span className="bx bx-show-alt" />
          <div>view</div>
        </a>
        <a
          className="action"
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          title="Fatih Telis CV Download"
          download
        >
          <span className="bx bx-download" />
          <div>download</div>
        </a>
      </Flex>
    </Screen>
  </Section>
);

export default Cv;
