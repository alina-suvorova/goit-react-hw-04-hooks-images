import './App.css';
import React, { Component } from 'react'
import Searchbar from './components/Searchbar/Searchbar';
import {getPictures} from './components/Api'
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';


class App extends Component {
  state = { 
    picture: [],
    page: 1,
    search: "",
    isOpenModal: false, 
    largeImageURL : "",
    loader: false
   }

   onHandleSubmit = (e) => {
     e.preventDefault()
     
     const search = e.target.elements[1].value;
     this.setState({page: 1, search, picture: []})
     setTimeout(() => {
      this.firstSearch()
     }, 500); 
     setTimeout(() => {
       this.scroll()
     }, 600); 
    }
    onHandleMorePicture = (e) => {
      this.setState(prev=>({page: prev.page += 1}))
      setTimeout(() => {
        this.morePictures()
      }, 500); 
      setTimeout(() => {
        this.scroll()
      }, 600); 
   }
   morePictures = () => {
      this.onToggleLoader()
      getPictures(this.state.search, this.state.page).then(data=>this.setState(prev=>({picture: [...prev.picture, ...data]}))).finally(this.onToggleLoader())
   }
   firstSearch = () => {
    this.onToggleLoader()
    getPictures(this.state.search, this.state.page).then(data=>this.setState({picture: data})).finally(this.onToggleLoader())
   }
   scroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
   }
   onToggleModal = (e) => {
     this.setState((prev) => ({ isOpenModal: !prev.isOpenModal}))
   }
   onModalImageUrl = (e) => {
    this.setState({largeImageURL: e.target.id})
    this.onToggleModal()    
   }
   onToggleLoader = () => {
    //  this.setState((prev) =>({loader: !prev.loader}))
   }
  render() {
    return (
      <>
      <Searchbar 
        onHandleSubmit={this.onHandleSubmit}
      />
      {this.state.loader && <Loader/>}
      <ImageGallery pictures={this.state.picture} onToggleModal={this.onModalImageUrl}/>
      {!!this.state.picture.length  && <Button getMorePictures={this.onHandleMorePicture}/>}
      {this.state.isOpenModal && <Modal largeImageURL={this.state.largeImageURL} onToggleModal={this.onToggleModal}/>}
      </>
    );
  }
}


export default App;
