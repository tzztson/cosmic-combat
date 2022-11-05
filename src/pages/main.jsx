import Line from "../components/line";

const Main = () => {
    return (
        <div className="main">
            <div className="section1">
                <img src={require("../assets/cosmic-logo.png")} />
            </div>
            <Line />
            <div className="section2">
                <div className="title">
                    <p>GAME PLAY</p>
                </div>
                <div className="content">
                    <div>
                        <img
                            src={require("../assets/cosmic-inventory-1.png")}
                            alt=""
                        />
                    </div>
                    <div className="">
                        <div className="requirements">
                            <h3>Requirements</h3>
                            <p>2Players</p>
                            <p>7 tile for each player</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3"></div>
            <div className="bottom-height"></div>
        </div>
    );
};

export default Main;
