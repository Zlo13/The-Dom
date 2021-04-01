import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import './Header.css'
import Home from '../Home/Home'
import News from '../News/News'
import NewsDetail from "../News/NewsDetail/NewsDetail";


const Header = () => {

  return(
    <Router>
      <header className="header">

        <NavLink to="/" className="header__logo logo"> </NavLink>

        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink  to='/news' activeClassName="selected">Новости</NavLink >
            </li>
            <li className="nav__item">
              <NavLink to='/aboutUs' activeClassName="selected">О нас</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to='/toTenants' activeClassName="selected">Арендаторам</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to='/brands' activeClassName="selected">Бренды</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to='/contacts' activeClassName="selected">Контакты</NavLink>
            </li>
          </ul>
        </nav>


      </header>
      <Switch>
        <Route exact path = '/' component={Home} />
        <Route exact path = '/news/:name' component={NewsDetail}/>
        <Route path = '/news' component={News}/>
      </Switch>
    </Router>

  )
}

export default Header