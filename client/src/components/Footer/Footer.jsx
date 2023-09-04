import styles from "./Footer.module.css";
import { BsTwitter } from "react-icons/bs";
import { CgCodeSlash } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
  <footer className={styles.footer}>
    <address className={styles.footer__address}>
      <h3 className={styles.footer__h3}>Page Created by <i>Arnoldo González</i></h3>
      <ul className={styles.footer__ul}>
        <li><a target="_blank" href="https://twitter.com/Arnoldo81333853" className={styles.footer__a}><span id="tw">Go to my Twitter</span><BsTwitter aria-labelledby="tw" /></a></li>
        <li><a target="_blank" href="https://github.com/arnoldo-gonzalez" className={styles.footer__a}><span id="gh">Go to my GitHub</span><FaGithub aria-labelledby="gh" /></a></li>
        <li><a target="_blank" href="https://github.com/arnoldo-gonzalez/messages-app" className={styles.footer__a}><span id="src">Go to the Souce Code</span><CgCodeSlash aria-labelledby="src" /></a></li>
      </ul>
    </address>
  </footer>
  )
}