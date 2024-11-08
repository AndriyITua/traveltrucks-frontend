import Container from "../../components/Container/Container.jsx";
import home from "../../assets/Home.jpg";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main>
      <section>
        <Container>
          <div className={css.imageContainer}>
            <img className={css.homeImg} src={home} alt="background" />
            <div className={css.overlay}>
              <h1 className={css.homeTitle}>Campers of your dreams</h1>
              <p className={css.homeText}>
                You can find everything you want in our catalog
              </p>
              <button className={css.homeButton}>View Now</button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
