import localFont from "next/font/local";

export const lalezar = localFont({
    src: [
        {
            path: "../public/fonts/Lalezar-Regular.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-lalezar",
    display: "swap",
});

export const naskh = localFont({
    src: [
        {
            path: "../public/fonts/NotoNaskhArabic-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/NotoNaskhArabic-Medium.ttf",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--font-naskh",
    display: "swap",
});