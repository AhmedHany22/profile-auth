import { getSession } from '@/actions'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const Premium = async () => {
    const session = await getSession()

    if (!session.isLogedIn) redirect('/login')
    if (!session.isPro) return (
        <>
            <div className='relative top-20 container mx-auto'>Only premium users can see this page</div>
            Go to <Link href="/profile">Profile</Link> page to upgrade.
        </>)

    return (
        <div className='relative top-20 container mx-auto'>Premium</div>
    )
}

export default Premium