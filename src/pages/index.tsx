import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />
    <div>
      <h2>このブログについて</h2>
      <p>プログラミングのまとめや，ただの日記などを書いています．</p>
      <h2>技術情報</h2>
      <p>
        <a
          href="https://github.com/otoyo/easy-notion-blog"
          target="_blank"
          rel="noreferrer"
        >
          easy-notion-blog
        </a>
        を元に、独自のカスタマイズなどをしています。
        <br />
        また、アップデートなども随時取り入れています。
      </p>
      <p>
        このブログのリポジトリは
        <a
          href="https://github.com/izumiz-dev/easy-notion-blog"
          target="_blank"
          rel="noreferrer"
        >
          こちら
        </a>
        です．
      </p>
      <h2>Links</h2>
      <ul>
        <li>
          プライベート丸出し系の
          <ExtLink href="https://twitter.com/izumiz-dev">ツイッター</ExtLink>
        </li>
        <li>
          もはや使っているリポジトリがわからない
          <ExtLink href="https://github.com/izumiz_dev">github</ExtLink>
        </li>
      </ul>
    </div>
  </div>
)

export default RenderPage
