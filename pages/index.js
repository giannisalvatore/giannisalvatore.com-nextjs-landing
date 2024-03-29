import dynamic from "next/dynamic";
import { Suspense } from "react";
import { getPlaiceholder } from "plaiceholder";

import Hero from "../components/hero";
import Layout from "../components/layout";
import SkillsSection from "../components/skills";

const Work = dynamic(() => import("../components/work"), { suspense: true });

export default function Home({ works }) {
    return (
        <Layout>
            <Hero />
            <WorksSection works={works} />
            <SkillsSection />
        </Layout>
    );
}

const WorksSection = ({ works }) => {
    const fallback = <>Loading</>;
    return (
        <Suspense fallback={fallback}>
            <Work data={works.shampora} />
            <Work data={works.planny} />
            <Work data={works.nftwatcher} />
        </Suspense>
    );
};

export async function getStaticProps() {
    return {
        props: {
            works: {
                shampora: {
                    title: "Shampora",
                    description:
                        "Shampora is an Italian startup that creates highly personalized products based on the needs of any customer's hair through 50 data points which the user responds through a quiz. Raised 5M+.",
                    image: "/images/work_shampora.jpg",
                    placeholder: await getPlaiceholder(
                        "/images/work_shampora.jpg"
                    ),
                    job: {
                        title: "Full stack developer",
                        date: "March 2018 - Present",
                        tasks: [
                            "Write modern, performant, maintainable code",
                            "Work with a variety of different languages, platforms, frameworks, payment gateway and content management systems such as JavaScript, React, Next.js, Node.js,  WordPress, AWS, Digital Ocean, Stripe, Braintree, and so on",
                            "Communicate with multi-disciplinary teams of engineers, marketers and designers on a daily basis",
                        ],
                    },
                },
                planny: {
                    title: "Planny",
                    description:
                        "Planny is a blazing fast Twitter scheduling tool with features like AI Writing, Viral Tweets searcher and so on. It grew organically from 0 to 100 users, and 10 active subscription.",
                    image: "/images/work_planny.jpg",
                    placeholder: await getPlaiceholder(
                        "/images/work_planny.jpg"
                    ),
                    job: {
                        title: "Full stack developer & Product Designer",
                        date: "August 2022 - Dic 2022",
                        tasks: [
                            "Developed and shipped highly interactive web application",
                            "UI / UX Design and implementation",
                            "Built with NextJS, NodeJS, MySQL, Stripe, AWS, PlanetScale and ☕️",
                        ],
                    },
                },
                nftwatcher: {
                    title: "NFTWatcher",
                    description:
                        "NFTWatcher is a platform that send customized notifications for price changes of chosen NFTs.",
                    image: "/images/work_nftwatcher.jpg",
                    placeholder: await getPlaiceholder(
                        "/images/work_nftwatcher.jpg"
                    ),
                    job: {
                        title: "Full stack developer & Product Designer",
                        date: "Jan 2022 - Mar 2022",
                        tasks: [
                            "Developed and shipped highly interactive web application",
                            "UI / UX Design and implementation",
                            "Worked using NextJS, PHP, MySQL, AWS S3 and AWS Managed Database",
                        ],
                    },
                },
            },
        },
    };
}
