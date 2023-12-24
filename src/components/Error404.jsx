import Error404Css from "./css/Error404.module.css";

export const Error404 = () => {
  return (
    <div>
      <a href="/" target="_blank">
        <header className={`${Error404Css["top-header"]}`}></header>
                          
        {/* <!--dust particel--> */}
        <div>
          <div className={`${Error404Css["starsec"]}`}></div>
          <div className={`${Error404Css["starthird"]}`}></div>
          <div className={`${Error404Css["starfourth"]}`}></div>
          <div className={`${Error404Css["starfifth"]}`}></div>
        </div>
        {/* <!--Dust particle end---> */}

        <div className={`${Error404Css["lamp__wrap"]}`}>
          <div className={`${Error404Css["lamp"]}`}>
            <div className={`${Error404Css["cable"]}`}></div>
            <div className={`${Error404Css["cover"]}`}></div>
            <div className={`${Error404Css["in-cover"]}`}>
              <div className={`${Error404Css["bulb"]}`}></div>
            </div>
            <div className={`${Error404Css["light"]}`}></div>
          </div>
        </div>
        {/* <!-- END Lamp --> */}
        <section className={`${Error404Css["error"]}`}>
          {/* <!-- Content --> */}
          <div className={`${Error404Css["error__content"]}`}>
            <div className = {`${Error404Css["error__message message"]}`}>
              <h1 className={`${Error404Css["message__title"]}`}>Page Not Found</h1>
              <p className={`${Error404Css["message__text"]}`}>
                We're sorry, the page you were looking for isn't found here. The
                link you followed may either be broken or no longer exists.
                Please try again, or take a look at our.
              </p>
            </div>
            <div className={`${Error404Css["error__nav e-nav"]}`}>
              <a href="/" target="_blanck" className="e-nav__link"></a>
            </div>
          </div>
          {/* <!-- END Content --> */}
        </section>
      </a>
    </div>
  );
};
