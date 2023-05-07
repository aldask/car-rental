import AppStore from "../images/appstore.svg";
import GooglePlay from "../images/googleplay.svg";

function DownloadApp() {
  return (
    <>
      <section className="download">
        <div className="container">
          <div className="apps">
            <div className="downloadText">
              <h2>Download our app to get most out of it</h2>
              <p>
                Thrown shy denote ten ladies though ask saw. Or by to he going
                think order event music. Incommode so intention defective at
                convinced. Led income months itself and houses you.
              </p>
              <div className="downloadButtons">
                <a href="https://google.com">
                  <img src={GooglePlay} alt="google-play"></img>
                </a>
                <a href="https://apple.com">
                  <img src={AppStore} alt="apple"></img>
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

