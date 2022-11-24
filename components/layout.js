import Navigation from "./navigation";
import Footer from "./navigation";

import styles from "./layout.module.css";

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            <div className={styles.main}>{children}</div>
            <Footer />
        </>
    );
}
