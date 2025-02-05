import Card from "./Card";
import style from "./Main.module.css";
function Main() {
  return (
    <main className={style.main}>
      <h2 className={style.h2}>Main Component</h2>
      <Card />
    </main>
  );
}
export default Main;
