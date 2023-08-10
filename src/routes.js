import Main from "./Component/Main/Main";
import Courses from './Component/Courses/Courses';
import Books from './Component/Books/Books';
import About from './Component/About/About';
import Users from './Component/Users/Users';

const routes=[
    {path:"/" , element:<Main />},
    {path:"/courses" , element:<Courses />},
    {path:"/books" , element:<Books />},
    {path:"/about" , element:<About />},
    {path:"/users" , element:<Users />},
]


export default routes;