import './App.css';
import React, { useState, useEffect } from 'react'
import Searchbar from './components/Searchbar/Searchbar';

import {getPictures} from './components/Api.js'
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';

const App = () => {
  const [picture, setPicture] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [largeImageURL, setLargeImageURL] = useState("")
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    page > 1 && morePictures()
    page === 1 && search && firstSearch()
  }, [page, search])
  
  const onHandleSubmit = (e) => {
    e.preventDefault()
    setPage(1)
    setSearch(e.target.elements[1].value)
    setTimeout(() => {
      scroll()
    }, 600); 
   }
  const onHandleMorePicture = (e) => {
    setPage(prev=>(prev + 1))
 }
const morePictures = () => {
    onToggleLoader()
    getPictures(search, page).
    then(data=>setPicture(prev=>([...prev, ...data]))).finally(onToggleLoader())
    setTimeout(() => {
      scroll()
    }, 600);
 }
const firstSearch = () => {
    onToggleLoader()
    getPictures(search, page).
    then(data=>setPicture(data)).finally(onToggleLoader())
 }
const scroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
 }
const onToggleModal = (e) => {
    setIsOpenModal((prev) => (!prev))
 }
const onModalImageUrl = (e) => {
    setLargeImageURL(e.target.id)
    onToggleModal()    
 }
const onToggleLoader = () => {
   setLoader((prev) =>(!prev))
 }
  return (
    <>
      <Searchbar 
        onHandleSubmit={onHandleSubmit}
      />
      {loader && <Loader/>}
      <ImageGallery pictures={picture} onToggleModal={onModalImageUrl}/>
      {!!picture.length  && <Button getMorePictures={onHandleMorePicture}/>}
      {isOpenModal && <Modal largeImageURL={largeImageURL} onToggleModal={onToggleModal}/>}
    </>
  );
}

export default App;



