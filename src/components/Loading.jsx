
import LoadingCss from "./css/Loading.module.css";

export const Loading = () => {
  return (
    <div className={LoadingCss.main}>
      <div className={LoadingCss['randar-box']}>
        <input
          type="checkbox"
          checked
          className={LoadingCss['randar-checkbox']}
        />
        <div className={LoadingCss['randar-top']}></div>
        <div className={LoadingCss['randar-top-body']}></div>
        <div className={LoadingCss['randar-content']}>
          <div className={LoadingCss['rander-ball']}></div>
          <div className={LoadingCss['rander-ball']}></div>
          <div className={LoadingCss['rander-ball']}></div>
          <div className={LoadingCss['rander-ball']}></div>
          <div className={LoadingCss['rander-pos']}></div>
        </div>
      </div>
    </div>
  );
};
