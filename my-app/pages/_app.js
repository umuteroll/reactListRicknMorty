import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import RnMProvider from '../context/RnMProvider'
export default function App({ Component, pageProps }) {
  return  <RnMProvider>  <Component {...pageProps} /> </RnMProvider>
}
