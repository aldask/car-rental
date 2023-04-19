import AppStore from '../images/appstore.svg';
import GooglePlay from '../images/googleplay.svg';

function DownloadApp() {
  return (
    <>
    <section className="downloadContainer">
        <div className='container'>
        <div className='downloadText'>
            <h2>Download our app to get most out of it</h2>
            <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. 
                Incommode so intention defective at convinced. Led income months itself and houses you.</p>
            <div className='downloadButtons'>
                <img src=/*{GooglePlay}*/"a" alt='google-play'></img>
                <img src=/*{AppStore}*/"a" alt='apple'></img>
            </div>
        </div>
        <div className='empty'></div>
        </div>
    </section>
    </>
  );
}

export default DownloadApp;