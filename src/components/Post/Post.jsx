import styles from "./post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/joaomarcelo-j.png"
            alt="profile pic"
          />
          <div className={styles.authorInfo}>
            <strong>Joao Marcelo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="3 de junho ás 12:32" dateTime="2022-06-03">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>
          <a href=""> #nlw </a>
          <a href=""> #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
