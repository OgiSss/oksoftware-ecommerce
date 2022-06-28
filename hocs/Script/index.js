function Script({ children }) {
    return <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }} />
}

export default Script
