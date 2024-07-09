import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import location from "../../assets/images/location.svg"
import account from "../../assets/images/account.svg"
import logo from "../../assets/images/logo.svg"
import shopping from "../../assets/images/shopping.svg"
import aksiya from "../../assets/images/aksiya.svg"
import pitsa from "../../assets/images/pitsa.svg"
import sushi from "../../assets/images/sushi.svg"
import napitki from "../../assets/images/napitki.svg"
import zakiski from "../../assets/images/zakiski.svg"
import desert from "../../assets/images/desert.svg"
import sous from "../../assets/images/sous.svg"
import kombo from "../../assets/images/kombo.svg"



import styles from "./Header.module.css"

const Header = () => {
  const [scrollVisible, setScrollVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrollVisible(true);
    } else {
      setScrollVisible(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <header>
      <div className={`${styles['header__scroll--hidden']} ${scrollVisible ? styles.none : styles.inline}`}>
        <div className='w-100 bg-white'>
        <div className={`container  ${styles.header__top}`}>
          <div className={styles['header__top--left']}>
            <div className={styles.location}>
              <img src={location} alt="" />
              <select className={styles.formSelect}>
                <option value="moskva" className={styles.option}>Москва</option>
                <option value="uzb" className={styles.option}>Узбекистан</option>
                <option value="kaz" className={styles.option}>Казахстан</option>
              </select>
            </div>
            <p className={styles['header__top--left--text']}>Проверить адрес</p>
            <p className={styles.min__time}>Среднее время доставки*: 00:24:19</p>
          </div>
          <div className={styles['header__top--right']}>
            <p className={styles.work__time}>Время работы: с 11:00 до 23:00</p>
            <div>
              <NavLink className={styles.account__link}>
                <img src={account} alt="account" /> Войти в аккаунт
              </NavLink>
            </div>
          </div>
        </div>
        </div>
        <hr />
        <div className='w-100 bg-white'>
        <div className={`container ${styles.header__buttom}`}>
          <div className="header__buttom--left">
            <Link><img src={logo} alt="logo" /></Link>
          </div>
          <div className={styles['header__buttom--right']}>
            <NavLink className={styles['nav-item']} to={`/cart`}><img src={shopping} alt="" /> 0</NavLink>
          </div>
        </div>
        </div>
        <div className="container navbar__hero">
          <ul className={`nav ${styles['navbar__hero--item']}`}>
            <li className="nav-item">
              <a className="nav-link" href="#"><img src={aksiya} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img src={pitsa} /></a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#"><img src={sushi} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img src={napitki} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img src={zakiski} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img src={kombo} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img src={desert} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img src={sous} /></a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.header__buttom}>
        <div className={`container ${styles.header__scroll} ${scrollVisible ? styles.inline : styles.none}`}>
          <div className="scroll__logo">
            <Link><img src={logo} alt="" /></Link>
          </div>
          <ul className={`nav ${styles['scroll__nav']}`} >
            <li className="nav-item">
              <a className={`${styles['nav-link']}`} href="#">Акции</a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']}`} href="#">Пицца</a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']}`} href="#">Суши</a>
            </li>

            <li className="nav-item">
              <a className={`${styles['nav-link']}`} href="#">Напитки</a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']}`} href="#">Закуски</a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']}`} href="#">Комбо</a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']}`} href="#">Десерты</a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']}`} href="#">Соусы</a>
            </li>
          </ul>
          <div className={styles['header__scroll--cart']}>
            <NavLink className={styles['nav-item']} to={`/cart`}><img src={shopping} alt="" /> 0</NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
