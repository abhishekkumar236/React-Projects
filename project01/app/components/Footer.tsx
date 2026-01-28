import Container from "./Container";
import { Logo } from "./Navbar";

function Footer() {
    return (
        <footer className="w-full bg-primary py-20">
            <Container>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    {/* Logo + description */}
                    <div className="flex flex-col gap-6">
                        <Logo />
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Making the world more productive, one task at a
                            time. Designed for modern teams.
                        </p>
                    </div>

                    {/* Products */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Products</h3>
                        <ul className="flex flex-col gap-2 text-gray-500 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Features
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Pricing
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Integrations
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Updates
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="flex flex-col gap-2 text-gray-500 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                About
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Careers
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Blog
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Press
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Support</h3>
                        <ul className="flex flex-col gap-2 text-gray-500 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Help Center
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Contact
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Privacy Policy
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Terms
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Your Company. All rights
                    reserved.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
