import Container from "./Container";

function Section03() {
    return (
        <Container>
            <div className="flex flex-col items-center justify-center pt-24 gap-6 pb-32">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-gray-500">
                        Join over 10,000 teams building the future with
                        Structura today.
                    </p>
                </div>
                <button className="button bg-button-primary text-white font-light">
                    Create Free Account
                </button>
            </div>
        </Container>
    );
}

export default Section03;
