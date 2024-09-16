import { SessionOptions } from "iron-session";

export interface SessionData {
    userName?: string;
    userId?: string;
    isPro?: boolean;
    isBlocked?: boolean;
    isLogedIn?: boolean;
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "tender-egypt",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    }
}

export const defaultSession: SessionData = {
    isLogedIn: false
}

// Unknown
export function sleep(ms: number) {
    console.log("sleep");
    return new Promise((resolve) => setTimeout(resolve, ms));
}