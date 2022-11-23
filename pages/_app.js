import Seo from "../components/seo";

import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/colors.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Seo />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
