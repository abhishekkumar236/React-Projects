import type { JSX } from "react";
import Container from "./Container";
import { FaBoltLightning } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

interface CardProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const cardsData = [
    {
        icon: <FaBoltLightning />,
        title: "Lighting Fast",
        description:
            "Optimized for speed and performance. No loading spinners, just instant access to your data whenever you need it.",
    },
    {
        icon: <IoShieldCheckmarkOutline />,
        title: "Bank-grade Security",
        description:
            "Your data is encrypted at rest and in transit. We use industry-standard security protocols to keep you safe.",
    },
    {
        icon: <ImStatsDots />,
        title: "Real-time Analytics",
        description:
            "Visualize your progress with beautiful, interactive charts. Track key metrics and make data-driven decisions.",
    },
];

function Section01() {
    return (
        <Container>
            <div className="py-16">
                <Tagline />
                <div className="flex w-full justify-between gap-4 pt-9">
                    {[...Array(3)].map((_, i) => (
                        <Card key={i} {...cardsData[i]} />
                    ))}
                </div>
            </div>
        </Container>
    );
}

function Tagline() {
    return (
        <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">
                Everything you need to scale
            </span>
            <div className="pt-6 flex flex-col items-center text-gray-500">
                <span>
                    Powerful features designed to help your business grow
                    without
                </span>
                <span>the growing pains. Simple to start, ready to scale.</span>
            </div>
        </div>
    );
}

function Card(card: CardProps) {
    return (
        <div className="border border-gray-300 flex flex-col items-start justify-center w-full p-7 rounded-2xl">
            <div className="w-fit p-4 bg-primary rounded-md">{card.icon}</div>
            <div className="flex flex-col items-start gap-5 pt-4">
                <span className="font-semibold text-xl">{card.title}</span>
                <span className="text-gray-500">{card.description}</span>
            </div>
        </div>
    );
}

export default Section01;
