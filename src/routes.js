import Main from "./Component/Main/Main";
import Courses from './Component/Courses/Courses';
import Books from './Component/Books/Books';
import About from './Component/About/About';
import Users from './Component/Users/Users';
import Login from "./Component/Login/Login";
import CourseDrilling from "./Component/Courses/CourseDrilling/CourseDrilling";

const routes=[
    {path:"/" , element:<Main />},
    {path:"/courses" , element:<Courses />},
    {path:"/courses/drilling" , element:<CourseDrilling />},
    {path:"/books" , element:<Books />},
    {path:"/about" , element:<About />},
    {path:"/users" , element:<Users />},
    {path:"/login" , element:<Login />},
]


export default routes;