import style from './Button.module.css'

const Button = ({getMorePictures}) => {
    return (
        <button id="loadMore" type='button' className={style.Button} onClick={getMorePictures}>Load more</button>
    );
}

export default Button;