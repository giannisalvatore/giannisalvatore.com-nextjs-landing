import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Work from "../components/work";

export default function Home() {
    const works = getWorks();
    return (<>
        <Navigation />
        <Hero />
        <Work data={works.shampora} />
        <Work data={works.shampora2} />
    </>)
}
function getWorks() {
    return {
        shampora: {
            title: "Shampora",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non consectetur nunc. Vivamus at orci in ligula volutpat mattis. Ut auctor lectus pulvinar, porta erat tristique, suscipit metus. Morbi non egestas neque, sed hendrerit turpis. Pellentesque eu felis et nisl dapibus consectetur sit amet vel augue. Cras at nibh at magna laoreet varius. Suspendisse pretium malesuada tincidunt. Nulla feugiat, turpis vitae tempus lacinia.",
            image: "/images/work_shampora.jpg"
        },
        shampora2: {
            title: "Shampora",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non consectetur nunc. Vivamus at orci in ligula volutpat mattis. Ut auctor lectus pulvinar, porta erat tristique, suscipit metus. Morbi non egestas neque, sed hendrerit turpis. Pellentesque eu felis et nisl dapibus consectetur sit amet vel augue. Cras at nibh at magna laoreet varius. Suspendisse pretium malesuada tincidunt. Nulla feugiat, turpis vitae tempus lacinia.",
            image: "/images/work_shampora.jpg"
        }
    }
}