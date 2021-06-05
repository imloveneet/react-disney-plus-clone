import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin
} from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider } from '../firebase'
import { useEffect } from 'react'

const Header = () => {
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)
  const dispatch = useDispatch()
  const history = useHistory()


  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if(user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          })
        )
        history.push('/')
      }
    })
  }, [dispatch, history])


  const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
      let { displayName, email, photoURL } = result.user
      dispatch(
        setUserLogin({
          name: displayName,
          email,
          photo: photoURL
        })
      )
      history.push('/')
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut)
      history.push('/login')
    })
  }
  return (
    <Nav>
      <Link to='/'>
        <Logo src='/images/logo.svg' alt='logo' />
      </Link>
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <Link to='/'>
              <img src='/images/home-icon.svg' alt='' />
              <span>HOME</span>
            </Link>
            <Link to='/' onClick={e => e.preventDefault()}>
              <img src='/images/search-icon.svg' alt='' />
              <span>SEARCH</span>
            </Link>
            <Link to='/' onClick={e => e.preventDefault()}>
              <img src='/images/watchlist-icon.svg' alt='' />
              <span>WATCHLIST</span>
            </Link>
            <Link to='/' onClick={e => e.preventDefault()}>
              <img src='/images/original-icon.svg' alt='' />
              <span>ORIGINALS</span>
            </Link>
            <Link to='/' onClick={e => e.preventDefault()}>
              <img src='/images/movie-icon.svg' alt='' />
              <span>MOVIES</span>
            </Link>
            <Link to='/' onClick={e => e.preventDefault()}>
              <img src='/images/series-icon.svg' alt='' />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <UserImg onClick={signOut} src={userPhoto} alt='profile' />
        </>
      )}
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 35px;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

const Logo = styled.img`
  width: 80px;
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`
const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`
const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`
