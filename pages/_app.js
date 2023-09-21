import MainLayout from '../src/app/layout/main-layout';
import '../src/app/globals.css';
import { Provider } from "react-redux";
import store from "../api/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      </Provider>
    </>
  );
}

export default MyApp;