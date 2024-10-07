import { IndividualFeature } from "./IndividualFeature";

const features = [
    {
        title: "AI for Legal Consumers",
        description:
            "From deciphering complex terms to understanding rights, we've got you covered.",
    },
    {
        title: "AI for Law Firms",
        description:
            "Streamlining processes and boosting efficiency, we're revolutionising the way law firms operate",
    },
    {
        title: "AI for Lawyers",
        description:
            "Let us handle the research and paperwork while you elevate client relationships.",
    },
];

export const Features = () => {
    return (
        <section className="py-24">
            <div className="container">
                <h2 className="text-5xl md:text-6xl text-center font-bold tracking-tighter">
                    Some of our features
                </h2>
                <p className="max-w-xl mx-auto text-center text-white/50 mt-5">
                    Enjoy customizable lists, team work tools, and smart tracking all in one place.
                    Set tasks, get reminders, and see your progress simply and quickly.
                </p>
                <ul className="columns-1 md:columns-3 w-10/12 mx-auto mt-16 space-y-4">
                    {features.map((feature, index) => (
                        <IndividualFeature
                            key={index}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};
