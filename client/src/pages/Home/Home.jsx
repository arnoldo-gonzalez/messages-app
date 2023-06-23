import styles from "./Home.module.css";
import heroImage from "../../assets/heroImage.png";
import heroBgImage from "../../assets/heroBgImage.jpg";
import aboutImage from "../../assets/aboutImage.jpg";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { CgTime, CgLock, CgCodeSlash } from "react-icons/cg";
import { FaUserFriends, FaGithub, FaKey } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { useEffect } from "react"

export default function Home() {

  useEffect(() => {
    document.title = "Messages RedWriters"
  }, [])

  return (
    <>
    <main className={styles.main}>
      <section className={styles.hero}>
        <article className={styles.hero__article}>
          <h1 className={styles.hero__h1}>We make <span className="red">posible</span> connect with your <span className="green">friends</span></h1>
          <p className={styles.hero__p}>In this place, you will be connected to your friends by more that messages, you will be connected by feelings printed in text</p>
        </article>
        <img className={styles["hero__bg-img"]} src={heroBgImage} alt="Messages RedWriters Connecting the pepole" />
        <img className={styles.hero__img} src={heroImage} alt="Messages RedWriters Connecting the pepole" />
      </section>
      <section className={styles.about}>
        <article className={styles.about__article}>
          <h2 className={styles.about__h2}>About</h2>
          <p className={styles.about__p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem suscipit, nisi pariatur deserunt sequi distinctio esse iure explicabo qui voluptates optio, officiis quas consequuntur amet perspiciatis incidunt vero. Molestiae, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus officiis id explicabo blanditiis. Dicta perspiciatis tempora, a praesentium nemo aut voluptatum, voluptas enim atque veritatis exercitationem accusamus sequi perferendis.</p>
          <h4 className={styles.about__h4}>We allow our users to share their feelings...</h4>
        </article>
        <img src={aboutImage} className={styles.about__img} alt="Our user sharing them feelings" />
      </section>
      <section className={styles.features}>
        <h2 className={styles.features__h2}>You should chose us because...</h2>
        <div className={styles["features__conatiner-articles"]}>
          <FeatureCard icon={CgTime} title="Real time chat" id="rtc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum, placeat illo provident dolorem sapiente quis, veniam recusandae delectus perspiciatis nulla accusantium voluptatum adipisci minus? Similique sed neque maiores quas?
          </FeatureCard>

          <FeatureCard icon={CgLock} title="Private/Public Chats" id="ppc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum, placeat illo provident dolorem sapiente quis, veniam recusandae delectus perspiciatis nulla accusantium voluptatum adipisci minus? Similique sed neque maiores quas?
          </FeatureCard>

          <FeatureCard icon={FaUserFriends} title="Meet new pepole" id="mwp">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum, placeat illo provident dolorem sapiente quis, veniam recusandae delectus perspiciatis nulla accusantium voluptatum adipisci minus? Similique sed neque maiores quas?
          </FeatureCard>
          
          <FeatureCard icon={FaKey} title="ChatId-Based key for chats" id="chk">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum, placeat illo provident dolorem sapiente quis, veniam recusandae delectus perspiciatis nulla accusantium voluptatum adipisci minus? Similique sed neque maiores quas?
          </FeatureCard>
        </div>
      </section>
    </main>
    <footer className={styles.footer}>
      <address className={styles.footer__address}>
        <h3 className={styles.footer__h3}>Page Created by <i>Arnoldo González</i></h3>
        <ul className={styles.footer__ul}>
          <li><a target="_blank" href="https://twitter.com/Arnoldo81333853" className={styles.footer__a}><span id="gh">Go to my GitHub</span><FaGithub aria-labelledby="gh" /></a></li>
          <li><a target="_blank" href="https://github.com/BlackBarto" className={styles.footer__a}><span id="tw">Go to my Twitter</span><BsTwitter aria-labelledby="tw" /></a></li>
          <li><a target="_blank" href="https://github.com/BlackBarto/messages-app" className={styles.footer__a}><span id="src">Go to the Souce Code</span><CgCodeSlash aria-labelledby="src" /></a></li>
        </ul>
      </address>
    </footer>
    </>
  )
}
