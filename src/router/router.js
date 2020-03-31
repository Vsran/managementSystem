import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {LogIn} from "../pages/Login";
import {Header} from "../components/Header/index";
import {SideBar} from "../components/Sidebar/index";
import {checkAuth} from "../utils/utils";

const routes = [
  {
    path: "/",
    exact: true,
    main: LogIn
  },
  {
    path: "/login",
    main: LogIn
  },
  {
    path: "/shoelaces",
    main: LogIn
  },
  {
    path: "/shoelaces",
    main: LogIn
  }
];

export default () => (
  <Router>
    <Route to="/" Component={LogIn}/>
    <Route to="/login" Component={LogIn}/>
    <Route to="/main" Component={<div>main</div>}/>
    <Route to="/error" Component={<div>error</div>}/>
  </Router>
)

export const Main = () => (
  <div>
  <Header/>
    <div style={{display: "flex"}}>
      <div>
        <SideBar/>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/Login">login</Link></li> */}
          <li><Link to="/bubblegum">Bubblegum</Link></li>
          <li><Link to="/shoelaces">Shoelaces</Link></li>
        </ul>
      </div>
      <div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Switch>
      </div>
    </div>
    </div>     
);

// 路由登录鉴权
const AuthRoute = ({component: Component, ...rest}) => (
  <Route 
    {...rest}
    render={checkAuth ? <Component {...props}/> : <Redirect to={"/login"}/>}
  />
)