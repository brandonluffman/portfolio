import '../styles/globals.css'
import '../styles/index.css'
import '../styles/about.css'
import '../styles/portfolio.css'
import '../styles/contact.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import '../styles/contactpage.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
