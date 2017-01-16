import React, { Component } from 'react';

//In React, they use downward DATA flow, which means that it is the responsibiliy of the most parent component to go fetch data


//turn a functional component into a class component when you need the component to havea 'State' and be able to introspect itself
//{Component} means the same as const Component = React.Component
//Each class must have a render function and it must return some JSX or else it will return an error
//render method is used to a single React element, it can be a Native DOM component like <div /> or a composite user created component <Searchbar />
//keep render() method pure, you can also return null or false with render to nothing
//the onChange method is used on forms whenever a form is changed, it will activate. 
//here we targeted event.target.value. When you just view the entire event/e of this interaction it shows you an object, this object has a whole number of different data sets. 
//in the target data set however, there is 'input' referring to our input field. We want to console.log that value therefore we went for the 'value' property of it
// orginally before the refactor to ES6 we had onChange = {this.onInputChange}, the naming methodology is due to being on any Input change will trigger the onChange event handler of the form
//onInputChange is just a name we made up for the method that will console.log the event 

/*

es5
onInputChange(event){
	console.log(event.target.value);
}


es6
let onInputChange = (event) => console.log(event.target.value)
refactored this by just cutting out the onInputChange and placing it directly onto the input instance. 
() around event can be removed since its in single line statement

*/


//State is a plain JS object that is used to record and react to user events. Each class based component has their own local state. 
//Whenever a component's state is changed, it is rerender and all it's children's state is also rendered.
//in order to use State it must be initialized first 

//constructor is used whenever there is an instance being used. Constructor is reserved to initialize variables and state
//super calls the parent function 
//this.state sets the initial value, by creating an object with the intial properties such as a search 'term' as '' for the STATE.
//this.state is used for only the initiliazation with the constructor and should never be used the manipulate the state later on, but can be used as reference

//this.setState however is used to manipulate and update the state. Each this.setState it will call render and rerender the past state to the current version
//this tells React that we are changing the State
//{} is used to reference JS variables

//controlled components change the flow how the data is being updated. In the uncontrolled manner whenever the USER enters the data, it updates the State.
//this forces a change in the value. However, in controlled Components, the user input triggers the event, but the value is not changed until the change in State is rendered
//this gives React more control over the the whole process.
//1. Contructor created and state is initalized with blank '' for term
//2. the value in value is still equal to '', when the user keypresses, it triggers the event with setState obtaining a new value.
//3. The value with {this.state.term} is not updated UNTIL set.state is rendered when the render() is called and then it will have the updated Searchbar value.

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

//very important what you are exporting behind the default value, if there was another variable called foo and it was exported instead of Searchbar the value would be completely different
