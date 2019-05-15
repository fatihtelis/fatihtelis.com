import { useEffect, useState } from 'react';
import { Flex } from '@rebass/grid';
import { Page, Document, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import { container, cover, colors } from '../../../style/theme';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

const cv = '/static/cv/fatih-telis_cv.pdf';

const CV = ({ active }) => {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const docHeight = 840;
    const newScale = (windowHeight - 300) / docHeight;
    setScale(newScale);
  }, []);
  return (
    <Outer active={active}>
      <Flex className="screen" flexDirection="column" alignItems="center">
        <Document file={cv} loading="Loading CV...">
          <Page pageNumber={1} scale={scale} />
        </Document>
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
      </Flex>
    </Outer>
  );
};

const Outer = styled(Flex).attrs({ as: 'section' })`
  ${cover()};
  opacity: ${props => (props.active ? '1' : '0')};
  pointer-events: ${props => (props.active ? 'visible' : 'none')};
  transition: ${props => (props.active ? '1s 0.4s' : '0.1s')};
  color: white;
  .screen {
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
  }
`;

export default CV;
