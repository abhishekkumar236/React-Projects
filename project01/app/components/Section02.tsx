import Container from "./Container";
import { FaRegCheckCircle } from "react-icons/fa";

interface TextCardProps {
    tag: string;
    title: string;
    description: string;
    pointers: string[];
}

interface ImageCardProps {
    image: string;
    alt?: string;
}

interface FeatureRowProps {
    textCard: TextCardProps;
    imageCard: ImageCardProps;
    reverse?: boolean;
}

const featureRows: FeatureRowProps[] = [
    {
        textCard: {
            tag: "Automation",
            title: "Let AI do the heavy lifting",
            description:
                "Our AI assistant learns your workflow and automates repetitive tasks. Focus on what matters.",
            pointers: [
                "Smart document organization",
                "Automated data entry",
                "Realtime multiplayer editing",
            ],
        },
        imageCard: {
            image: "/Feature_image02.png",
            alt: "Automation feature",
        },
        reverse: false,
    },
    {
        textCard: {
            tag: "Analytics",
            title: "Make data-driven decisions",
            description:
                "Gain insights into your team's performance with detailed analytics and reporting.",
            pointers: [
                "100+ Pre-built templates",
                "Project progress tracking",
                "Team productivity metrics",
            ],
        },
        imageCard: {
            image: "/Feature_image01.png",
            alt: "Analytics feature",
        },
        reverse: true,
    },
];

function Section02() {
    return (
        <div className="w-full bg-primary py-20">
            <Container>
                <div className="grid grid-cols-2 gap-y-24 p-4">
                    {featureRows.map((row, index) => (
                        <FeatureRow key={index} {...row} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

function FeatureRow({ textCard, imageCard, reverse = false }: FeatureRowProps) {
    return (
        <>
            {reverse ? (
                <>
                    <ImageCard {...imageCard} />
                    <TextCard {...textCard} />
                </>
            ) : (
                <>
                    <TextCard {...textCard} />
                    <ImageCard {...imageCard} />
                </>
            )}
        </>
    );
}

function TextCard({ tag, title, description, pointers }: TextCardProps) {
    return (
        <div className="flex flex-col items-start gap-8 p-10">
            <span className="text-button-primary uppercase">{tag}</span>
            <span className="text-5xl font-semibold">{title}</span>
            <span className="text-gray-500">{description}</span>
            <div className="flex flex-col items-start">
                {pointers.map((point, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <FaRegCheckCircle className="text-button-primary text-3" />
                        <span>{point}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ImageCard({ image, alt = "feature image" }: ImageCardProps) {
    return (
        <div className="flex justify-center">
            <img src={image} alt={alt} />
        </div>
    );
}

export default Section02;
