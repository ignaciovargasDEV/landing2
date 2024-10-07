import {
    PenTool,
    ReceiptText,
    ClipboardMinus,
    UsersRound,
    BriefcaseBusiness,
    ScrollText,
    Blocks,
    MessageCircleQuestion,
    BookCheck,
    NotebookPen,
    Workflow,
    BookOpenText,
  } from "lucide-react";
  import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
  import { IndividualFeature } from "./IndividualFeature";
  
  interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  
  const features: FeatureProps[] = [
    {
      icon: <PenTool />,
      title: "Create Boilerplate Clauses",
      description:
        "Generate standard adaptable clauses for agreements, saving time drafting contracts",
    },
    {
      icon: <ReceiptText />,
      title: "Consumer Compliant Letter",
      description:
        "Dispute invoice you think unjustified, asking the bot to write letter requesting credit",
    },
    {
      icon: <ClipboardMinus />,
      title: "Prompts for immigration lawyers",
      description:
        "Increase efficiency in searching for information related to immigration policies.",
    },
    {
      icon: <UsersRound />,
      title: "Prompts for family lawyers",
      description:
        "Reduce the time spent searching for information using family law prompts",
    },
    {
      icon: <BriefcaseBusiness />,
      title: "Demand Letter",
      description:
        "Ask the bot to draft a letter formally requesting payment or resolution of a dispute.",
    },
    {
      icon: <ScrollText />,
      title: "Legal compliance",
      description: "We can help you comply with jurisprudential requirements.",
    },
    {
      icon: <BookOpenText />,
      title: "Termination Letter",
      description: "A written notice to end a contractual agreement.",
    },
    {
      icon: <Blocks />,
      title: "Child support",
      description:
        "Consult with artificial intelligence regarding child benefits.",
    },
    {
      icon: <MessageCircleQuestion />,
      title: "Cease and Desist Letter",
      description:
        "Ask the bot to draft a letter formally requesting payment or resolution of a dispute.",
    },
    {
      icon: <BookCheck />,
      title: "Prompts for tax lawyers",
      description:
        "Letter when somebody is infringing your intellectual property.",
    },
    {
      icon: <NotebookPen />,
      title: "Legal document automation",
      description:
        "We can automate the process of drafting jurisprudential documents.",
    },
    {
      icon: <Workflow />,
      title: "Legal process improvement",
      description:
        "The bot can improve the efficiency and effectiveness of the process",
    },
  ];
  
  export const UsesCases = () => {
    return (
      <section className="py-24">
        <div className="container">
          <h2 className="text-5xl md:text-6xl text-center font-bold tracking-tighter">
            Some of our uses cases
          </h2>
          <p className="max-w-xl mx-auto text-center text-white/50 mt-5">
            Enjoy customizable lists, team work tools, and smart tracking all in one place.
            Set tasks, get reminders, and see your progress simply and quickly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-10/12 mx-auto mt-16">
            {features.map((feature, index) => (
              <IndividualFeature
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  