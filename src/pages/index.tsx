import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />
    <div>
      <h2>このブログについて</h2>
      <p>プログラミングのまとめや，ただの日記などを書いています．</p>
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
