import React from "react";
import style from "./loading.module.css";
// import loadingDog from "../../assets/loading.gif"

const Loading = () => {
  return (
    <div className={style.loader}>
      <div className={style.dogLoad}>
        <div className={style.dogBody}>
          <div className={style.dogTail}>
            <div className={style.dogTail}>
              <div className={style.dogTail}>
                <div className={style.dogTail}>
                  <div className={style.dogTail}>
                    <div className={style.dogTail}>
                      <div className={style.dogTail}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.dogTorso}></div>
        <div className={style.dogHead}>
          <div className={style.dogEars}>
            <div className={style.dogEar}></div>
            <div className={style.dogEar}></div>
          </div>
          <div className={style.dogEyes}>
            <div className={style.dogEye}></div>
            <div className={style.dogEye}></div>
          </div>
          <div className={style.dogMuzzle}>
            <div className={style.dogTongue}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
