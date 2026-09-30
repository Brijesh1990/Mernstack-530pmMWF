# what is component in react js ?
 
 1. components is small peace of code that return a react element.
 2. components are reusable.
 3. components are independent and isolated.
 4. components can be functional or class based.
 5. components can be nested inside other components to create complex user interfaces.
 6. components can accept props (short for properties) which are used to pass data from parent component to child component.
 7. components can have state which is used to manage data that can change over time.

8. components can have lifecycle methods which are used to perform actions at specific points in the component's lifecycle (e.g. when the component is initialized, mounted, updated, or unmounted).

9. component is small peace of file that can be saved with .js or .jsx extension i.e also called component.


# types of components in react js
1. functional components: these are simple JavaScript functions that return a React element. They can accept props as an argument and can use hooks to manage state and lifecycle methods.

**examples  of functional components:**
```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```
```javascript
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
}
```


2. class components: these are ES6 classes that extend the React.Component class. They can have a render method that returns a React element, and they can also have state and lifecycle methods.

**examples of class components:**
```javascript   
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
```javascript
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  render() {
    return <h1>Hello, {this.state.name}!</h1>;
  }
}
```

**note:** with the introduction of hooks in React 16.8, functional components can now manage state and lifecycle methods, making them more powerful and often preferred over class components for their simplicity and readability.

**note :A class based components is not supported in functional components of hooks**