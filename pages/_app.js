import globalStyles from '../styles/globals'
import { Layout } from '../components/layout/Layout'
import ThemeProvider from '../hocs/ThemeProvider/index'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}

export default MyApp
