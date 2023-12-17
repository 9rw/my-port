import '../styles/home.css';
import '../styles/bubble.css';
import '../styles/waterwave.css';
function Home() {
    return (
        <section id='Home' tabIndex={1} className='bg-sea full-w-h child'>
            <div className="wrapper">
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
            </div>
            <div className="content-container flex">
                <div className="content">
                    <h2>PORTFOLIO</h2>
                    <h2>PORTFOLIO</h2>
                </div>
            </div>
        </section>
    );
};

export default Home;