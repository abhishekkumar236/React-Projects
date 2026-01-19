import { type ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
    return <div className="max-w-7xl mx-20 w-full">{children}</div>;
}

export default Container;
