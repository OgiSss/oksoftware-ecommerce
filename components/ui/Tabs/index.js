export function Tabs() {
    return (
        <>
            <div className="tabs">
                <span>Category 1</span>
                <span>Category 2</span>
                <span>Category 3</span>
            </div>
            <style jsx>
                {`
                    .tabs {
                        display: flex;
                        justify-content: space-evenly;
                        margin: 2rem auto;
                    }

                    .tabs span {
                        font-size: 2rem;
                        cursor: pointer;
                    }

                    .tabs span:hover {
                        color: blue;
                    }
                `}
            </style>
        </>
    )
}

export default Tabs
