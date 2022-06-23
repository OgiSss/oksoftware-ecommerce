function Error() {
    return <h1>Error</h1>
}

Error.getInitialProps = ({ res, err }) => {
    let statusCode = 0
    if (res) {
        statusCode = res.statusCode
    } else if (err) {
        statusCode = err.statusCode
    } else {
        statusCode = 404
    }
    return { statusCode }
}

export default Error
