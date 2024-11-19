import type { Metadata } from "next";
import { Inter, Ysabeau_SC } from "next/font/google";
import "./globals.css";
import { ScrollToTopButton } from "../../components/Buttons";
import { NavbarAlt } from "../../components/navigation/NavBar";
import Footer from "../../components/Footer";
import { SanityProvider } from "@/context/sanity";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const ysabeauSC = Ysabeau_SC({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-heading",
});

export const metadata: Metadata = {
    title: {
        default: "Teamwork",
        template: "%s | Teamwork",
    },
    description: "Frigjør kraften i medarbeiderskapet",
    keywords: [
        "medarbeiderskap",
        "skandinaviske ledelsesmodellen",
        "employeeship",
    ],
    authors: [{ name: "Teamwork" }],
    creator: "Teamwork",
    publisher: "Teamwork",
    metadataBase: new URL("https://www.teamwork.no"),
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "nb_NO",
        url: "/",
        title: "Teamwork",
        description: "Frigjør kraften i medarbeiderskapet",
        siteName: "teamwork.no",
        images: [
            {
                url: "/LogoLight.svg", // Legg denne bildefilen i public-mappen
                width: 1200,
                height: 630,
                alt: "Teamwork Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Teamwork",
        description: "Beskrivelse for Twitter",
        images: ["/LogoLight.svg"], // Legg denne bildefilen i public-mappen
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='nb' className={`${inter.variable} ${ysabeauSC.variable}`}>
            <head>
                <link rel='canonical' href='https://teamwork.no' />
            </head>
            <body
                className={`${inter.className} antialiased overflow-x-hidden`}
            >
                <NavbarAlt />
                <SanityProvider>{children}</SanityProvider>
                <ScrollToTopButton />
                <Footer />
            </body>
        </html>
    );
}
