import { MainNavigation } from './MainNavigation'
import withTheme from '../../hocs/withTheme/index'

export function Layout({ children }) {
    return (
        <>
            <div className="main-wrapper">
                <MainNavigation />
                <main>{children}</main>
            </div>
            <style jsx>
                {`
                    .main-wrapper {
                        background-color: var(--palette-secondary-dark);
                        margin: 2rem;
                        border-radius: 25px;
                    }
                `}
            </style>
        </>
    )
}

export default withTheme(Layout)
