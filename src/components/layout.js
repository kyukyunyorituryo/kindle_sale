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
        <p>
          
    <a href="https://kyukyunyorituryo.github.io/">サイトトップ</a>、
    <a href="https://kyukyunyorituryo.github.io/new_epub/">kindle新刊</a>、
    <a href="https://kyukyunyorituryo.github.io/new_pub/">紙の新刊</a>、
    <a href="https://kyukyunyorituryo.github.io/i/"> 電書ニュース</a>

  </p><p>Kindle本のセールを一覧で表示するサイトです。アマゾン以外のセール品と比較することで、アマゾンサイトで紹介されていないセール品まで網羅しています。</p>
<p><Link to="/sort">新しい順番に表示</Link>、<Link to="/free">無料本まとめ</Link></p>

<p>出版社ごとのセール一覧：<Link to="/kadokawa">KADOKAWA</Link>、<Link to="/kodansha">講談社</Link>、<Link to="/akitashoten">秋田書店</Link>、<Link to="/hakusensha">白泉社</Link>、<Link to="/shueisha">集英社</Link>、<Link to="/tokuma">徳間書店</Link>、<Link to="/shougakukan">小学館</Link></p>
<p>カテゴリごとのセール一覧：<Link to="/manga">漫画</Link>、<Link to="/lightnovel">ライトノベル</Link>、<Link to="/novel">小説</Link></p>
      </>
    )
  } else {
    header = (
        <>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      <p>
    <a href="https://kyukyunyorituryo.github.io/">サイトトップ</a>、
    <a href="https://kyukyunyorituryo.github.io/new_epub/">kindle新刊</a>、
    <a href="https://kyukyunyorituryo.github.io/new_pub/">紙の新刊</a>、
    <a href="https://kyukyunyorituryo.github.io/i/"> 電書ニュース</a>

  </p><p>Kindle本のセールを一覧で表示するサイトです。アマゾン以外のセール品と比較することで、アマゾンサイトで紹介されていないセール品まで網羅しています。</p>
<p><Link to="/sort">新しい順番に表示</Link>、<Link to="/free">無料本まとめ</Link></p>

<p>出版社ごとのセール一覧：<Link to="/kadokawa">KADOKAWA</Link>、<Link to="/kodansha">講談社</Link>、<Link to="/akitashoten">秋田書店</Link>、<Link to="/hakusensha">白泉社</Link>、<Link to="/shueisha">集英社</Link>、<Link to="/tokuma">徳間書店</Link>、<Link to="/shougakukan">小学館</Link></p>
<p>カテゴリごとのセール一覧：<Link to="/manga">漫画</Link>、<Link to="/lightnovel">ライトノベル</Link>、<Link to="/novel">小説</Link></p>
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
