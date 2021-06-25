import React, {Component} from 'react';

export default class SearchBar extends Component {
   constructor(props){
      super(props);

      this.state = {
         userInput: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleClear = this.handleClear.bind(this);
   }

   handleChange(e){
      this.setState({userInput: e.target.value});
   }

   handleClick(){
      this.props.search(this.state.userInput);
   }

   handleClear(){
      this.setState({userInput: ''});
      this.props.reset();
   }

   render(){
      return(
         <section className="search-bar">
            <input 
               value={this.state.userInput} 
               onChange={(e) => this.handleChange(e)}
               placeHolder="Search by Title or Author"
            />
            <button className="button" onClick={this.handleClick}> Search </button>
            <button className="button" onClick={this.handleClear}> Clear Search </button>
         </section>
      )
   };
}