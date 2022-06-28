import Link from 'next/link'
import Image from 'next/image'

const PROFILE_WIDTH = 44
const PROFILE_HEIGHT = 44

export function MainNavigation() {
    const routes = [
        {
            link: '/',
            display: 'Home',
        },
        {
            link: '/categories',
            display: 'Categories',
        },
        {
            link: '/products',
            display: 'Products',
        },
        {
            link: '/about',
            display: 'About',
        },

        {
            link: '/log-in',
            display: 'Log in',
        },
    ]

    return (
        <>
            <header className="header">
                <div className="logo">
                    <Image
                        width={PROFILE_WIDTH}
                        height={PROFILE_HEIGHT}
                        src="/vercel.svg"
                        alt="logo"
                    />
                </div>
                <ul className="navigation">
                    {routes.map((item) => (
                        <li key={item.display}>
                            <Link href={item.link}>{item.display}</Link>
                        </li>
                    ))}
                </ul>
            </header>

            <style jsx>
                {`
                    .header {
                        width: 100%;
                        height: 10rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0 10%;
                        border-radius: 10px;
                        background-color: var(--palette-common-white);
                    }

                    .logo {
                        font-size: 2rem;
                        color: white;
                        font-weight: bold;
                    }

                    .header ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        align-items: baseline;
                    }

                    .header li {
                        margin-left: 3rem;
                    }

                    .header li:last-child {
                        margin-left: 6rem;
                    }

                    .navigation :global(a) {
                        font-size: 1.3rem;
                        color: var(--palette-text-primary);
                    }

                    .navigation :global(a:hover),
                    .navigation :global(a:active),
                    .navigation :global(a.active) {
                        color: var(--palette-secondary-main);
                    }
                `}
            </style>
        </>
    )
}

export default MainNavigation
