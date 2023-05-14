import "../styles/Download/download-style.css";
import AppStore from "../images/Download/appstore.png";
import GooglePlay from "../images/Download/googleplay.png";

function DownloadApp() {
  return (
    <>
      <section className="download">
        <div className="container">
          <div className="apps">
            <div className="download__text">
              <h2 className="download__title">Download our app to get most out of it</h2>
              <p className="download__desc">
                Thrown shy denote ten ladies though ask saw. Or by to he going
                think order event music. Incommode so intention defective at
                convinced. Led income months itself and houses you.
              </p>
              <div className="download__buttons">
                <a href="https://google.com">
                  <img
                    className="download__google-play"
                    src={GooglePlay}
                    alt="google-play"
                  ></img>
                </a>
                <a href="https://apple.com">
                  <img
                    className="download__apple-store"
                    src={AppStore}
                    alt="apple"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DownloadApp;