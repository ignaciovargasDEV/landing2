"use client";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

function SmoothScrolling({ children }: Props) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 2 }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
