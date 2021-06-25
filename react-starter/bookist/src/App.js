import React, {Component} from 'react';
import './index.css';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import SearchBar from './Components/SearchBar';
import data from './data.js';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      books: data,
      shelf: []
    };

    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

  addToShelf(click){
    const addTitle = this.state.shelf;
    addTitle.push(click);
    this.setState({shelf: addTitle});
  }

  clearShelf(){
    this.setState({shelf: []});
  }

  filterBooks(input){
    const {books} = this.state;

    const filteredBooks = books.filter((book) => {
      return book.title.toLowerCase().includes(input.toLowerCase()) || book.author.toLowerCase().includes(input.toLowerCase())
    });
    this.setState({books: filteredBooks});
  }

  reset(){
    this.setState({books: data});
  }

  render(){
    const {books, shelf} = this.state;
    return (
      <div>
        <Header />
        <SearchBar search={this.filterBooks} reset={this.reset} />
        <section className="app">
          <BookList books={books} addBook={this.addToShelf} />
          <Shelf shelf={shelf} remove={this.clearShelf} />
        </section>
      </div>
    )
  };
}