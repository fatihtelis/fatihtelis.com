import styled from 'styled-components';
import { media, cover } from '../../style/theme';

const Navigation = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 100px;
  z-index: 200;
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    ${media.phone`
      align-items: flex-start;
      padding-top: 20px;
    `};
  }
  .logo {
    line-height: 1;
    white-space: nowrap;
    .name {
      font-size: 32px;
      ${media.phone`
        font-size: 28px;
      `};
    }
    .title {
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 0.6px;
      ${media.phone`
        font-size: 12px;
      `};
    }
  }
`;

const Main = styled.main`
  ${cover('fixed')};
  background-color: #f5f7fa;
  padding-top: 120px;
  overflow-y: auto;
  padding-bottom: 60px;

  .container {
    .games-header {
      text-align: center;
      margin-bottom: 60px;
      ${media.phone`
        margin-bottom: 40px;
      `};

      h1 {
        font-size: 48px;
        font-weight: 700;
        margin: 0 0 15px 0;
        color: #2c3e50;
        ${media.phone`
          font-size: 36px;
        `};
      }

      .subtitle {
        font-size: 18px;
        font-weight: 300;
        color: #666;
        margin: 0;
        ${media.phone`
          font-size: 16px;
        `};
      }
    }

    .games-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
      max-width: 900px;
      margin: 0 auto;
      ${media.phone`
        gap: 25px;
      `};
    }

    .privacy-content {
      max-width: 800px;
      margin: 0 auto;
      background-color: white;
      padding: 50px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      ${media.phone`
        padding: 30px 20px;
      `};

      h1 {
        font-size: 36px;
        font-weight: 700;
        margin: 0 0 10px 0;
        color: #2c3e50;
        ${media.phone`
          font-size: 28px;
        `};
      }

      .last-updated {
        font-size: 14px;
        color: #666;
        margin: 0 0 40px 0;
        font-style: italic;
      }

      section {
        margin-bottom: 40px;

        h2 {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 15px 0;
          color: #2c3e50;
          ${media.phone`
            font-size: 20px;
          `};
        }

        h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 20px 0 10px 0;
          color: #2c3e50;
          ${media.phone`
            font-size: 16px;
          `};
        }

        p {
          font-size: 16px;
          line-height: 1.7;
          color: #555;
          margin: 0 0 15px 0;
          ${media.phone`
            font-size: 14px;
            line-height: 1.6;
          `};
        }

        ul {
          margin: 15px 0;
          padding-left: 25px;

          li {
            font-size: 16px;
            line-height: 1.7;
            color: #555;
            margin-bottom: 10px;
            ${media.phone`
              font-size: 14px;
              line-height: 1.6;
            `};

            strong {
              font-weight: 600;
              color: #2c3e50;
            }
          }
        }

        a {
          color: #39318e;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export { Navigation, Main };
