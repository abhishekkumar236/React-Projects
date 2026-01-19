import Container from "./Container";
import Preview from "../../public/Preview.png";
function Hero() {
    return (
        <div className="bg-primary py-20 flex">
            <Container>
                <div className="flex flex-col flex-wrap justify-center items-center">
                    <Tag />
                    <HeroTag />
                    <CTAButtons />
                    <HeroImage />
                </div>
            </Container>
        </div>
    );
}

function Tag() {
    return (
        <div className="bg-white border border-gray-200 rounded-full px-4 flex justify-center w-fit">
            New Feature: AI automation v2.0 is live
        </div>
    );
}

function HeroTag() {
    return (
        <>
            <div className="text-8xl font-semibold py-5 text-center">
                Simplify your workflow with intelligent tools
            </div>
            <div className="text-gray-500 text-center flex flex-col pt-4">
                <span>
                    Structura helps teams organize, track, and manage their work
                </span>
                <span>
                    efficiently. Stop juggling tools and start getting things
                    done.
                </span>
            </div>
        </>
    );
}

function CTAButtons() {
    return (
        <div className="flex gap-4 pt-8">
            <button className="button bg-button-primary text-white">
                Get Started
            </button>
            <button className="button bg-white text-black">View Demo</button>
        </div>
    );
}

function HeroImage() {
    return (
        <>
            <img src={Preview} alt="" className="pt-16" />
        </>
    );
}

export default Hero;
