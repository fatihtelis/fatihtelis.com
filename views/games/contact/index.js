import Layout from '../../../layout';
import { Navigation, Main, ContactButton } from '../style';
import { Container } from '../../../style/theme';

const meta = {
  title: 'Contact - Games | fatih telis',
  description: 'Contact fatih telis about games and game development',
  ogImage: '/og-image.jpg',
};

const GamesContact = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:fatih.telis@gmail.com?subject=Game Inquiry';
  };

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
          <div className="contact-content">
            <h1>Get in Touch</h1>
            <p className="subtitle">
              Have questions about our games? We&apos;d love to hear from you.
            </p>

            <div className="contact-info">
              <section>
                <h2>Game Support & Feedback</h2>
                <p>
                  If you&apos;re experiencing issues with any of our games, have suggestions for
                  improvements, or want to share your feedback, please don&apos;t hesitate to reach
                  out. Your input helps us create better gaming experiences.
                </p>
              </section>

              <section>
                <h2>Business Inquiries</h2>
                <p>
                  Interested in collaboration, game development services, or have a project in mind?
                  We&apos;re always open to discussing new opportunities and partnerships in the
                  gaming industry.
                </p>
              </section>

              <section>
                <h2>Press & Media</h2>
                <p>
                  For press inquiries, interview requests, or media kit information, please contact
                  us and we&apos;ll get back to you as soon as possible.
                </p>
              </section>

              <div className="contact-cta">
                <p>Ready to connect? Click the button below to send us an email.</p>
                <ContactButton onClick={handleContactClick}>
                  <i className="bx bx-envelope" />
                  <span>Send Email</span>
                </ContactButton>
              </div>
            </div>
          </div>
        </Container>
      </Main>
    </Layout>
  );
};

export default GamesContact;
