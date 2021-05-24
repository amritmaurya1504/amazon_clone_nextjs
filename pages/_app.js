import '../styles/globals.css'
import { Provider as AuthProvider } from "next-auth/client"
import { store } from '../app/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </AuthProvider>
    )
}

export default MyApp
