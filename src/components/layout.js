import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
    <>
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      <nav >
        <ul>
    <li><a href="https://kyukyunyorituryo.github.io/new_epub/">kindle新刊</a></li>
    <li><a href="https://kyukyunyorituryo.github.io/new_pub/">紙の新刊</a></li>
    <li><a href="https://kyukyunyorituryo.github.io/i/"> 電書ニュース</a></li>

  </ul>
      </nav>
      </>
    )
  } else {
    header = (
        <>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
            <nav >
        <ul>
    <li><a href="https://kyukyunyorituryo.github.io/new_epub/">kindle新刊</a></li>
    <li><a href="https://kyukyunyorituryo.github.io/new_pub/">紙の新刊</a></li>
    <li><a href="https://kyukyunyorituryo.github.io/i/"> 電書ニュース</a></li>
  </ul>
      </nav>
      </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()},
        {` `}
        <a href="https://github.com/kyukyunyorituryo">kyukyunyorituryo</a>
      </footer>
    </div>
  )
}

export default Layout
