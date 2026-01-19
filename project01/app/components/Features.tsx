import Container from "./Container";
import { FaBoltLightning } from "react-icons/fa6";

function Features() {
    return (
        <Container>
            <div className="py-16">
                <Tagline />
                <div className="flex w-full justify-between gap-4">
                    <Card />
                    <Card />
                    <Card />
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

function Card() {
    return (
        <div className="border border-gray-300 flex justify-center w-full py-4">
            <div className="w-full">
                <FaBoltLightning />
            </div>
            <div></div>
        </div>
    );
}

export default Features;
