# what is react router dom ?

 1. react router dom is an external package of react js 
 2. react js router dom is used to connect one page to another page 
 3. react router dom is a package that is used to redirect one page to another page
 
 **how to install react router dom**

 ```
 npm create vite@latest
 cd appname
 npm install react-router-dom

 ```


 **modules of react router dom**

 **BrowserRouter :**
 ```
 it is a parent of routing will be load your Router in your web page
 import {BroswerRouter as Router} from 'react-router-dom' 

 ```

 **Router :**

 ```
  it is a parent of routing will be load your Router in your web page
 import {BroswerRouter as Router} from 'react-router-dom' 

 ```
 
 **Routes :**

 ```
  Routes is a modules come from react router dom that can be hold as parent of  multiple Route
   import {BroswerRouter as Router,Routes} from 'react-router-dom'

 ```
 
 **Route :**

  ```
   Route is hold multiple components via path
   Route is multiple that can be hold multiple pages Route

    import {BroswerRouter as Router,Routes,Route} from 'react-router-dom

  ```
 **Link :**
 
 ```
 Link is an module of react router dom and it is used to redirect one page to another page or Links multiple pages 
 
 import {Link} from 'react-router-dom'

 <a href='about.html'>About</a>
 or 
 <Link to='/about'>About</Link>

 ```


 *** :**

 ```
 * is search all page routing if page routing  not found load 404 or page not found

 ```

 **path :**

 ```
 path is load your routing from react-router-dom
 <Route path='/'></Route>
 ```


 **element :**

 ```
 element is a attributes of Route that can be explain your page route are loaded from which components in react js
 
  <Route path='/' element={<Layout />}></Route>

 ```

 