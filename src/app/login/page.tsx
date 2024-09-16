"use client"

import { login } from '@/actions'
import React from 'react'
import { useFormState } from 'react-dom'

const Login = () => {
    const [state, formAction] = useFormState<any, FormData>(login, undefined)
    return (
        <section className="relative w-full h-full py-40 min-h-screen">
            <div className="absolute top-0 w-full h-full bg-slate-100 bg-full bg-repeat-round" style={{ backgroundImage: 'url(https://demos.creative-tim.com/notus-react/static/media/register_bg_2.4f2cb0ac.png)' }}></div>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4 max-w-[415px]">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-slate-500 text-sm font-bold">Sign in with</h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <button className="bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                        <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-react/static/media/github.6c955556.svg" />Github</button>
                                    <button className="bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                        <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-react/static/media/google.eae9aa93.svg" />Google</button>
                                </div>
                                <hr className="mt-6 border-b-1 border-slate-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-slate-400 text-center mb-3 font-bold">
                                    <small>Or sign in with credentials</small>
                                </div>
                                <form action={formAction}>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="grid-password">User Name</label>
                                        <input name="username" type="text" className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="username" />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="grid-password">Password</label>
                                        <input name="password" type="password" className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" />
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                                            <span className="ml-2 text-sm font-semibold text-slate-600">Remember me</span>
                                        </label>
                                    </div>
                                    <div className="text-center mt-6">
                                        <button className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit">Sign In</button>
                                    </div>
                                    {state?.error && <div className="p-4 mb-4 text-sm text-red-700 rounded bg-red-200 mt-2" role="alert">
                                        <span className="font-medium">Danger alert!</span> {state.error}.
                                    </div>}
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <a href="#pablo" className="text-slate-200">
                                    <small>Forgot password?</small>
                                </a>
                            </div>
                            <div className="w-1/2 text-right">
                                <a className="text-slate-200" href="#/auth/register">
                                    <small>Create new account</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Login