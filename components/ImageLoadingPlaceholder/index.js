import LoadingSpinner from '../ui/LoadingSpinner'
import withTheme from '../../hocs/withTheme'
import CLASS_NAMES from '../../utils/constants/class-names'

function ImageLoadingPlaceholder({ theme }) {
    return (
        <>
            <div className={CLASS_NAMES.IMAGE_LOADING_PLACEHOLDER}>
                <LoadingSpinner />
            </div>
            <style jsx>{`
                .${CLASS_NAMES.IMAGE_LOADING_PLACEHOLDER} {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    place-items: center;
                    // TODO: no effect on aspect ratio box
                    box-shadow: ${theme.shadows[1]};
                }
            `}</style>
        </>
    )
}

export default withTheme(ImageLoadingPlaceholder)
