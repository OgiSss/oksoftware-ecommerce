import { MdStarRate, MdStarOutline } from 'react-icons/md'

import ImageCustom from '../../Image'

function Card({ title, price, images, stars }) {
    console.log(title, price, images, stars)
    const rating = []
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < 5; index++) {
        if (index > stars) {
            rating.push(<MdStarOutline />)
        } else {
            rating.push(<MdStarRate color="yellow" />)
        }
    }
    return (
        <>
            <div className="card">
                <div className="image-wrapper">
                    <ImageCustom src={images || '/images/clothes.jpg'} alt={title} layout="fill" />
                </div>

                <h6 className="title">{title}</h6>
                <div className="rating">{rating}</div>
                <p className="price">{price}</p>
            </div>

            <style jsx>
                {`
                    .title {
                        padding-top: 2.5rem;
                    }
                    .rating {
                        padding-top: 2.5rem;
                    }
                    .price {
                        padding-top: 2.5rem;
                    }
                    .image-wrapper {
                        height: 50%;
                        width: 100%;
                        position: relative;
                    }
                    .card {
                        height: 50rem;
                        width: 100%;
                        background-color: bisque;
                        border: 1px solid red;
                    }
                `}
            </style>
        </>
    )
}

export default Card
