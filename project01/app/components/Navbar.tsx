import Container from "./Container";

function Navbar() {
    return (
        <Container>
            <div className="w-full py-3 flex justify-between border-b border-gray-200">
                <Logo />
                <Navlinks />
                <AuthButtons />
            </div>
        </Container>
    );
}

function Logo() {
    return (
        <div className="flex items-center gap-1.5">
            <svg
                width="30"
                height="20"
                viewBox="0 0 56 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M43 0C50.1797 6.44277e-07 56 5.8203 56 13C56 20.1797 50.1797 26 43 26H34.4844L48.4844 40H31.5156L15.7578 24.2422C14.672 23.1564 14 21.6569 14 20C14 16.6863 16.6863 14 20 14H43C43.5523 14 44 13.5523 44 13C44 12.4477 43.5523 12 43 12H20C15.5817 12 12 15.5817 12 20C12 22.3901 13.0482 24.5347 14.71 26H14.6875L28.6875 40H20C8.95431 40 0 31.0457 0 20C0 8.95431 8.9543 0 20 0H43Z"
                    fill="#2663f6"
                ></path>
                <path
                    d="M56 28V40H51.3125L39.3125 28H56Z"
                    fill="#2663f6"
                ></path>
            </svg>
            <span className="text-2xl font-semibold">Structura</span>
        </div>
    );
}

function Navlinks() {
    return (
        <div className="flex gap-8 text-gray-500 items-center">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
        </div>
    );
}

function AuthButtons() {
    return (
        <div className="flex gap-3.5">
            <button className="text-gray-600">Log in</button>
            <button className="button bg-button-primary text-white">
                Get Started
            </button>
        </div>
    );
}

export default Navbar;
