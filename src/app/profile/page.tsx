import { changePremium, getSession } from '@/actions'
import { redirect } from 'next/navigation';

const Profile = async () => {
    const session = await getSession();
    if (!session.isLogedIn) redirect('/login');


    return (
        <div className="px-5 mt-20 mb-12 flex flex-col col-span-12 gap-y-7">
            <div className="p-1.5 box flex flex-col box--stacked">
                <div className="h-60 relative w-full rounded-[0.6rem] bg-gradient-to-b from-theme-1/95 to-theme-2/95">
                    <div className="w-full h-full relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-texture-white before:-mt-[50rem] after:content-[''] after:absolute after:inset-0 after:bg-texture-white after:-mt-[50rem]">
                    </div>
                    <div className="absolute inset-x-0 top-0 w-32 h-32 mx-auto mt-36">
                        <div className="w-full h-full overflow-hidden border-[6px] box border-white rounded-full image-fit">
                            <img alt="Tailwise - Admin Dashboard Template" src="https://tailwise.vercel.app/assets/user1-50x50-nO_v65RH.jpg" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-5 h-5 mb-2.5 mr-2.5 border-2 border-white rounded-full bg-success box">
                        </div>
                    </div>
                </div>
                <div className="p-5 flex flex-col sm:flex-row gap-y-3 sm:items-end rounded-[0.6rem] bg-slate-50 pt-12 justify-between">
                    <div>
                        <label htmlFor="regular-form-1" className="mb-2 flex items-center text-slate-500">You have {session.isPro ? "Premium" : "Free"} account<div className="cursor-pointer ml-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info w-3.5 h-3.5 text-slate-500 stroke-[1.3]">
                                <circle cx="12" cy="12" r="10">
                                </circle>
                                <path d="M12 16v-4">
                                </path>
                                <path d="M12 8h.01">
                                </path>
                            </svg>
                        </div>
                        </label>
                        <div className="relative mt-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]">
                                <circle cx="12" cy="12" r="10">
                                </circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20">
                                </path>
                                <path d="M2 12h20">
                                </path>
                            </svg>
                            <select value={session.isPro ? "premium" : "free"} className="bg-[length:20px_auto] disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 bg-chevron-black transition duration-200 ease-in-out w-full text-sm border-slate-300/60 shadow-sm py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 sm:w-44 mr-3 rounded-[0.5rem] pl-9">
                                <option value="premium">premium</option>
                                <option value="free">free</option>
                            </select>
                        </div>
                    </div>
                    <form action={changePremium}>
                        <button type="submit" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed text-primary dark:border-primary [&amp;:hover:not(:disabled)]:bg-primary/10 sm:ml-auto border-primary/50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-image stroke-[1.3] w-4 h-4 mr-2.5">
                                <rect width="18" height="18" x="3" y="3" rx="2" ry="2">
                                </rect>
                                <circle cx="9" cy="9" r="2">
                                </circle>
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21">
                                </path>
                            </svg> {session.isPro ? "Cancel Pim" : "Buy Pim"}
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">Profile Info</div>
                <div>
                    <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                        <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                            <div className="text-left">
                                <div className="flex items-center">
                                    <div className="font-medium">Full Name</div>
                                    <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">Required</div>
                                </div>
                                <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">Enter your full legal name as it appears on your official identification.</div>
                            </div>
                        </label>
                        <div className="flex-1 w-full mt-3 xl:mt-0">
                            <div className="flex flex-col items-center md:flex-row">
                                <input type="text" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&amp;:not(:first-child):not(:last-child)]:-mt-px [&amp;:not(:first-child):not(:last-child)]:md:mt-0 [&amp;:not(:first-child):not(:last-child)]:md:-ml-px [&amp;:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10" placeholder="Jennifer" />
                                <input type="text" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&amp;:not(:first-child):not(:last-child)]:-mt-px [&amp;:not(:first-child):not(:last-child)]:md:mt-0 [&amp;:not(:first-child):not(:last-child)]:md:-ml-px [&amp;:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10" placeholder="Depp" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                        <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                            <div className="text-left">
                                <div className="flex items-center">
                                    <div className="font-medium">Date of Birth</div>
                                    <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">Required</div>
                                </div>
                                <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">This information is required to verify your age and provide age-appropriate services.</div>
                            </div>
                        </label>
                        <div className="flex-1 w-full mt-3 xl:mt-0">
                            <input type="text" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80" value="14 Sep, 2024" />
                        </div>
                    </div>
                    <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                        <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                            <div className="text-left">
                                <div className="flex items-center">
                                    <div className="font-medium">Gender</div>
                                </div>
                                <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">Select your gender from the options.</div>
                            </div>
                        </label>
                        <div className="flex-1 w-full mt-3 xl:mt-0">
                            <div className="flex flex-col items-center md:flex-row">
                                <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&amp;:not(:first-child):not(:last-child)]:-mt-px [&amp;:not(:first-child):not(:last-child)]:md:mt-0 [&amp;:not(:first-child):not(:last-child)]:md:-ml-px [&amp;:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                                    <div className="flex items-center">
                                        <input id="checkbox-switch-1" type="radio" className="transition-all duration-100 ease-in-out shadow-sm border-slate-300/80 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary/60 [&amp;[type='radio']]:checked:border-primary/50 [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary/60 [&amp;[type='checkbox']]:checked:border-primary/50 [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50" value="" />
                                        <label htmlFor="checkbox-switch-1" className="cursor-pointer ml-2">Male</label>
                                    </div>
                                </div>
                                <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&amp;:not(:first-child):not(:last-child)]:-mt-px [&amp;:not(:first-child):not(:last-child)]:md:mt-0 [&amp;:not(:first-child):not(:last-child)]:md:-ml-px [&amp;:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                                    <div className="flex items-center">
                                        <input id="checkbox-switch-2" type="radio" className="transition-all duration-100 ease-in-out shadow-sm border-slate-300/80 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary/60 [&amp;[type='radio']]:checked:border-primary/50 [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary/60 [&amp;[type='checkbox']]:checked:border-primary/50 [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50" value="" />
                                        <label htmlFor="checkbox-switch-2" className="cursor-pointer ml-2">Female</label>
                                    </div>
                                </div>
                                <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&amp;:not(:first-child):not(:last-child)]:-mt-px [&amp;:not(:first-child):not(:last-child)]:md:mt-0 [&amp;:not(:first-child):not(:last-child)]:md:-ml-px [&amp;:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                                    <div className="flex items-center">
                                        <input id="checkbox-switch-3" type="radio" className="transition-all duration-100 ease-in-out shadow-sm border-slate-300/80 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary/60 [&amp;[type='radio']]:checked:border-primary/50 [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary/60 [&amp;[type='checkbox']]:checked:border-primary/50 [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50" value="" />
                                        <label htmlFor="checkbox-switch-3" className="cursor-pointer ml-2">Prefer Not to Say</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                        <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                            <div className="text-left">
                                <div className="flex items-center">
                                    <div className="font-medium">Email</div>
                                    <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">Required</div>
                                </div>
                                <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">Please provide a valid email address that you have access to.</div>
                            </div>
                        </label>
                        <div className="flex-1 w-full mt-3 xl:mt-0">
                            <input type="text" placeholder="angelina.jolie@left4code.com" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80" />
                        </div>
                    </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                    <button className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed text-primary dark:border-primary [&amp;:hover:not(:disabled)]:bg-primary/10 w-full px-4 border-primary/50 md:w-auto">Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default Profile