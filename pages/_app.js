import Seo from "../components/seo";

import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/colors.css";
import "../styles/palette.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Seo />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
