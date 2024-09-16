"use server";

import { getIronSession } from "iron-session"
import { defaultSession, SessionData, sessionOptions, sleep } from "@/lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

let user: SessionData = {}

export const getSession = async (shouldSleep = true) => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);
    if (!session.isLogedIn) {
        session.isLogedIn = defaultSession.isLogedIn;
    }

    if (shouldSleep) {
        // simulate looking up the user in db
        await sleep(10);
    }

    // Check the user in DB
    session.isBlocked = user.isBlocked
    session.isPro = user.isPro

    return session;
}

export const login = async (prevState: { error: undefined | string }, formData: FormData) => {
    const session = await getSession();

    const formUsername = formData.get("username");
    const formPassword = formData.get("password");

    // Check user in the DB
    const response = await fetch('http://localhost:3000/api/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formUsername, formPassword }),
        credentials: "same-origin"
    });

    if (response.ok) {
        const data = await response.json(); // { token, user: { id, username, role } }
        user = { ...data }
    } else {
        throw new Error('Invalid credentials');
    }

    session.userId = user.userId;
    session.userName = user.userName;
    session.isPro = user.isPro;
    session.isLogedIn = true;

    await session.save();
    redirect('/')
}
export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect('/');
}

export const changePremium = async () => {
    const session = await getSession()
    user.isPro = !session.isPro
    session.isPro = user.isPro
    await session.save()

    revalidatePath('/profile')
}