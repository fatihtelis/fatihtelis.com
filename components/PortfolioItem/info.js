import { Flex, Box } from '@rebass/grid';
import { Info } from './style';
import libs from '../../static/data/libs.json';

const PortfolioInfo = ({ data: { title, description, link, technologies, screenshots } }) => (
  <Info flexDirection="column" justifyContent="space-between">
    <Flex className="content" flexDirection="column">
      <Flex className="project-header" justifyContent="space-between" alignItems="center">
        <Box className="project-title">{title}</Box>
        <a href={link} target="_blank" rel="noopener noreferrer nofollow">
          GO TO PROJECT WEBSITE
          <span className="bx bx-chevrons-right" />
        </a>
      </Flex>
      <Box className="description">{description}</Box>
    </Flex>
    <Flex className="detail-wrapper" flexDirection="column">
      <Flex className="detail" alignItems="center">
        <Box className="detail-title">SCREENSHOTS</Box>
        <Flex alignItems="center">
          {screenshots.map((item, index) => (
            <a href={item} target="_blank" rel="noopener noreferrer" key={item}>
              {index + 1}
              <span className="bx bx-link-external" />
            </a>
          ))}
        </Flex>
      </Flex>
      <Flex className="detail" alignItems="center">
        <Box className="detail-title">FRAMEWORKS/LIBS USED</Box>
        <Flex alignItems="center">
          {technologies.map(item => (
            <a
              href={libs[item].website}
              target="_blank"
              rel="noopener noreferrer"
              title={item}
              key={item}
            >
              <img src={libs[item].logo} height="20" alt={item} />
            </a>
          ))}
        </Flex>
      </Flex>
    </Flex>
  </Info>
);

export default PortfolioInfo;
