import React, {Component} from 'react';
import './index.css';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data.js';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      books: data
    };
  }

  render(){
    return (
      <div>
        <Header />
        <section className="app">
          <BookList books={this.state.books} />
          <Shelf />
        </section>
      </div>
    )
  };
}