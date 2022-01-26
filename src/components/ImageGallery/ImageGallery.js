import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import style from './ImageGallery.module.css'
import PropTypes from 'prop-types';

const ImageGallery = ({pictures, onToggleModal}) => {
    return (
        <ul className={style.ImageGallery}>
            <ImageGalleryItem pictures={pictures} onToggleModal={onToggleModal}/>
        </ul>
    );
}

export default ImageGallery;

ImageGalleryItem.propTypes = {
    pictures: PropTypes.array,
}