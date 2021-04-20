import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/index.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
