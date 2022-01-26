import style from './ImageGalleryItem.module.css'



const ImageGalleryItem = ({pictures, onToggleModal}) => {
    return (
        <>
            {pictures.map(pic=> 
                <li className={style.ImageGalleryItem} onClick={onToggleModal} key={pic.id}>
                    <img src={pic.webformatURL} alt={pic.tags} id={pic.largeImageURL } className={style.ImageGalleryItemImage} />
                </li>
            )}
        </>
    );
}

export default ImageGalleryItem;

