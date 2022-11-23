import dynamic from "next/dynamic";
import { Suspense } from "react";

const Navigation = dynamic(() => import("../components/navigation"), {
    suspense: true,
});
const Hero = dynamic(() => import("../components/hero"), {
    suspense: true,
});
const Work = dynamic(() => import("../components/work"), {
    suspense: true,
});

export default function Home() {
    const works = getWorks();
    return (
        <Suspense fallback={`Loading...`}>
            <Navigation />
            <Hero />
            <Work data={works.shampora} />
            <Work data={works.planny} />
        </Suspense>
    );
}

function getWorks() {
    return {
        shampora: {
            title: "Shampora",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non consectetur nunc. Vivamus at orci in ligula volutpat mattis. ",
            image: "/images/work_shampora.jpg",
            job: {
                title: "Full stack developer",
                date: "March 2018 - Present",
                tasks: [
                    "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                    "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                    "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
                ],
            },
        },
        planny: {
            title: "Planny",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non consectetur nunc. Vivamus at orci in ligula volutpat mattis. ",
            image: "/images/work_shampora.jpg",
            job: {
                title: "Full stack developer & Designer",
                date: "August 2022 - Present",
                tasks: [
                    "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                    "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                    "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
                ],
            },
        },
    };
}
