import Head from "next/head";
import { useRouter } from "next/router";
import Seo from "./seo.json";

export default function HeadComponent() {
    const router = useRouter();
    const path = router.pathname;

    const siteName = "Gianni Salvatore";
    const baseUrl = "https://giannisalvatore.com";

    var title = Seo[path] ? Seo[path].title : Seo.default.title;
    var description = Seo[path]
        ? Seo[path].description
        : Seo.default.description;

    let og = `https://og-image.vercel.app/${title}.png`;

    if (path == "/") {
        og = `https://d2ylvbv6ijkuas.cloudfront.net/og.jpeg`;
    }

    let seo = {
        "og:locale": "en",
        "og:type": "website",
        "og:title": title,
        "og:description": description,
        "og:url": baseUrl,
        "og:image": og,
        "og:image:width": "1200",
        "og:image:height": "586",
        "og:image:type": "image/jpeg",
        "og:site_name": siteName,
        "og:image:alt": "Gianni Salvatore - Full stack developer",
        "twitter:card": "summary",
        "twitter:image": og,
        "twitter:site": baseUrl,
        "twitter:title": title,
        "twitter:description": description,
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="og:locale"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta property="og:type" content={seo["og:type"]} />
                <meta property="og:title" content={seo["og:title"]} />
                <meta
                    property="og:description"
                    content={seo["og:description"]}
                />
                <meta property="og:url" content={seo["og:url"]} />
                <meta property="og:image" content={seo["og:image"]} />
                <meta property="og:image:alt" content={seo["og:image:alt"]} />
                <meta
                    property="og:image:width"
                    content={seo["og:image:width"]}
                />
                <meta
                    property="og:image:height"
                    content={seo["og:image:height"]}
                />
                <meta property="og:image:type" content={seo["og:image:type"]} />
                <meta property="og:site_name" content={seo["og:site_name"]} />
                <meta name="twitter:card" content={seo["twitter:card"]} />
                <meta name="twitter:site" content={seo["twitter:site"]} />
                <meta name="twitter:title" content={seo["twitter:title"]} />
                <meta
                    name="twitter:description"
                    content={seo["twitter:description"]}
                />
                <meta name="twitter:image" content={seo["twitter:image"]} />

                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/favicon.ico"></link>
                <meta name="theme-color" content="#fff" />

                <link
                    rel="preload"
                    href="/fonts/CircularStd-Light.woff2"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/CircularStd-Book.woff2"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/CircularStd-Medium.woff"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/CircularStd-Bold.woff"
                    as="font"
                    crossOrigin=""
                />
            </Head>
        </>
    );
}
