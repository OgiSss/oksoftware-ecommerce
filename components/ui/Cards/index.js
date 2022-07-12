import axios from 'redaxios'
import { useEffect, useState } from 'react'
import Card from '../Card'
import API_BASE_URL from '../../../config/config'
import ImageLoadingPlaceholder from '../../ImageLoadingPlaceholder'

export function Cards() {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                axios({
                    method: 'get',
                    url: `${API_BASE_URL}api/products/`,
                    responseType: 'json',
                }).then((response) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    setCards(response.data.data || [])
                    setIsLoading(false)
                })
            } catch (error) {
                console.error("Can't fetch data ")
            }
        }

        fetchData()
    }, [])

    return (
        <div className="cards">
            {isLoading ? (
                <ImageLoadingPlaceholder />
            ) : (
                cards.map((item) => <Card key={item.id} data={item} />)
            )}

            <style jsx>
                {`
                    .cards {
                        display: grid;
                        grid-template-columns: auto auto auto;
                    }
                `}
            </style>
        </div>
    )
}

export default Cards
