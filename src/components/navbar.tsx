import { getSession, logout } from '@/actions'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const session = await getSession()
    console.log(session);

    return (
        <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link className="text-slate-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href="/">Next Auth</Link>
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="flex items-center">
                            <Link className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/profile">
                                <i className="text-slate-400 far fa-file-alt text-lg leading-lg mr-2"></i> Profile
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="flex items-center">
                            <Link className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/premium">Premium</Link>
                            <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48">
                                <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400">Admin Layout</span>
                                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700" href="#/admin/dashboard">Dashboard</a>
                                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700" href="#/admin/settings">Settings</a>
                                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700" href="#/admin/tables">Tables</a>
                                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700" href="#/admin/maps">Maps</a>
                                <div className="h-0 mx-4 my-2 border border-solid border-slate-100">
                                </div>
                                <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400">Auth Layout</span>
                                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700" href="#/auth/login">Login</a>
                                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700" href="#/auth/register">Register</a>
                                <div className="h-0 mx-4 my-2 border border-solid border-slate-100">
                                </div>
                                <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400">No Layout</span>
                                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700" href="#/landing">Landing</a>
                                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700" href="#/profile">Profile</a>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <a className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F" target="_blank">
                                <i className="text-slate-400 fab fa-facebook text-lg leading-lg ">
                                </i>
                                <span className="lg:hidden inline-block ml-2">Share</span>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&amp;text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20" target="_blank">
                                <i className="text-slate-400 fab fa-twitter text-lg leading-lg ">
                                </i>
                                <span className="lg:hidden inline-block ml-2">Tweet</span>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar" target="_blank">
                                <i className="text-slate-400 fab fa-github text-lg leading-lg ">
                                </i>
                                <span className="lg:hidden inline-block ml-2">Star</span>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <Link className="bg-sky-500 text-white active:bg-sky-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" href="/login">
                                <i className="fas fa-arrow-alt-circle-down">
                                </i> Login
                            </Link>
                            {
                                session.isLogedIn && <form action={logout}>
                                    <button type="submit" className="bg-rose-500 text-white active:bg-sky-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                                        Logout
                                    </button>
                                </form>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar