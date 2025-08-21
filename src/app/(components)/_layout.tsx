'use client'
import { Geist, Geist_Mono } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";
import initializeObserver from "../(functions)/_intersection_observer";
import NavBar from "./_navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [theme] = useState('');
    const [active, setActive] = useState('home')
    const observerRef = useRef<{main: IntersectionObserver|null, prev: { id: string, theme: string }}>({main: null, prev: { id: "", theme: "" }})

    useEffect(() => {
        startObserver()
    });

    const startObserver = useCallback(() => {
        initializeObserver(observerRef, setActive)
    }, [])


    return (
        <html lang="en">
            <body id="body"
                className={`${geistSans.variable} ${geistMono.variable} ${theme} antialiased`}
            >
                <div className="relative">
                    <NavBar theme={theme} active={active} setActive={setActive} />
                    <div className="items-center justify-items-center" id="main">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}