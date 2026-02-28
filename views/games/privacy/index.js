import Layout from '../../../layout';
import { Navigation, Main } from '../style';
import { Container } from '../../../style/theme';

const meta = {
  title: 'Privacy Policy - Games | fatih telis',
  description: 'Privacy policy for games developed by fatih telis',
  ogImage: '/og-image.jpg',
};

const GamesPrivacy = () => {
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
          <div className="privacy-content">
            <h1>Privacy Policy for Games</h1>
            <p className="last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section>
              <h2>Introduction</h2>
              <p>
                This Privacy Policy describes how we handle information when you use our mobile games. 
                We are committed to protecting your privacy and ensuring transparency about our data practices.
              </p>
            </section>

            <section>
              <h2>Information We Collect</h2>
              <p>Our games are designed with privacy in mind. We collect minimal information necessary for the game to function:</p>
              
              <h3>Game Center Integration</h3>
              <p>
                Our games integrate with Apple Game Center to provide leaderboards and achievements. 
                When you use Game Center features, Apple may collect and process information according to their privacy policy. 
                We do not have access to your personal Game Center account information beyond what is necessary to display your 
                achievements and leaderboard rankings within the game.
              </p>

              <h3>Advertising</h3>
              <p>
                Our games use Google AdMob to display personalized advertisements. Personalized ads are
                based on your interests, demographics, and other data collected by Google to provide a more
                relevant advertising experience. AdMob may collect information to serve and personalize ads, such as:
              </p>
              <ul>
                <li>Device identifiers (such as advertising ID)</li>
                <li>IP address</li>
                <li>Device information (model, operating system version)</li>
                <li>App usage data</li>
                <li>Browsing and search history (collected by Google)</li>
                <li>Demographic and interest data</li>
              </ul>
              <p>
                You can opt out of personalized ads at any time by adjusting your device settings
                (see "Your Rights and Choices" below). For more information about how Google uses
                data, please visit{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Google's Privacy Policy
                </a>.
              </p>
            </section>

            <section>
              <h2>What We Don't Collect</h2>
              <p>We do not collect or store:</p>
              <ul>
                <li>Personal identification information (name, email, phone number)</li>
                <li>Account credentials or login information</li>
                <li>Payment information</li>
                <li>Precise location data</li>
                <li>Personal interests or browsing history directly (however, Google AdMob may use such data for personalized ads — see "Advertising" above)</li>
                <li>Contact lists or other personal data from your device</li>
              </ul>
            </section>

            <section>
              <h2>How We Use Information</h2>
              <p>The limited information collected is used for:</p>
              <ul>
                <li>Displaying advertisements through AdMob</li>
                <li>Providing Game Center features (leaderboards, achievements)</li>
                <li>Improving game performance and fixing bugs</li>
                <li>Analytics to understand how the game is used (anonymized data)</li>
              </ul>
            </section>

            <section>
              <h2>Third-Party Services</h2>
              
              <h3>Google AdMob</h3>
              <p>
                Our games use Google AdMob for advertising, including personalized ads. Google may use
                information such as your advertising ID, browsing activity, and interests to serve ads
                that are more relevant to you. AdMob's use of information is governed by{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Google's Privacy Policy
                </a>. You can manage your ad personalization preferences in your device settings or
                at{' '}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                  Google Ads Settings
                </a>.
              </p>

              <h3>Apple Game Center</h3>
              <p>
                Game Center features are provided by Apple. Your use of Game Center is subject to 
                Apple's Privacy Policy and Terms of Service. You can manage your Game Center settings 
                in your device's Settings app.
              </p>
            </section>

            <section>
              <h2>Consent for Personalized Ads</h2>
              <p>
                Where required by applicable law (such as the EU's GDPR or Apple's App Tracking Transparency framework),
                we will ask for your consent before serving personalized ads. If you do not provide consent or later
                withdraw it, you will still see ads, but they will not be personalized to your interests.
              </p>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical measures to protect any data that is processed. 
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your information, 
                we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>Children's Privacy</h2>
              <p>
                Our games are not directed to children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe 
                your child has provided us with personal information, please contact us so we can delete 
                such information.
              </p>
            </section>

            <section>
              <h2>Your Rights and Choices</h2>
              <p>You have the following rights regarding your information:</p>
              <ul>
                <li>
                  <strong>Manage Game Center:</strong> You can enable or disable Game Center features 
                  in your device's Settings app
                </li>
                <li>
                  <strong>Reset Advertising ID:</strong> You can reset your device's advertising identifier 
                  at any time through your device settings
                </li>
                <li>
                  <strong>Opt Out of Personalized Ads:</strong> You can opt out of personalized ads by
                  disabling ad tracking in your device's privacy settings
                  (Settings → Privacy & Security → Tracking on iOS), or by visiting{' '}
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                    Google Ads Settings
                  </a>{' '}
                  to manage your ad personalization preferences
                </li>
              </ul>
            </section>

            <section>
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please{' '}
                <a href="/games/contact">contact us</a>.
              </p>
            </section>
          </div>
        </Container>
      </Main>
    </Layout>
  );
};

export default GamesPrivacy;

