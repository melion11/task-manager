import s from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <section className={s.NotFoundPage}>
      <div className={"container"} style={{ textAlign: "center" }}>
        Page not Found 404
      </div>
    </section>
  );
};
