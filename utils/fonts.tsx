import localFont from "next/font/local";

export const yekanFont = localFont(
    {
        src: [
            {
                path: "../public/font/YekanBakh-Light.woff2",
                weight: "100",
                style: "normal"
            },
            {
                path: "../public/font/YekanBakh-Regular.woff2",
                weight: "200",
                style: "normal"
            },
            {
                path: "../public/font/YekanBakh-Bold.woff2",
                weight: "400",
                style: "normal"
            },
            {
                path: "../public/font/YekanBakh-Fat.woff2",
                weight: "600",
                style: "normal"
            },
            {
                path: "../public/font/YekanBakh-Heavy.woff2",
                weight: "700",
                style: "normal"
            },
        ]
    }
)
