import Line from "../components/line";

const Main = () => {
    return (
        <div className="main">
            <div className="section1">
                <img src={require("../assets/cosmic-logo.png")} alt="" />
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
            <div className="section3">
                <div className="">
                    <div>THE BASICS</div>
                    <p>
                        Both Players take turns placing down a tile on the game
                        board
                    </p>
                    <p>
                        The objective is to place a higher number next to a
                        lower number of an enemy tile to take it over. the
                        player with the most tiles at the end wins
                    </p>
                </div>
                <div className="content">
                    <div>
                        <img
                            src={require("../assets/cosmic-card.png")}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="title">
                    <p>BATTLE LOGIC</p>
                </div>
                <div className="content">
                    <div>
                        <p>
                            The tile being placed down is known as the attacking
                            tile for that turn An attacking tile has to battle
                            all enemy numbered sides touching the attacking
                            tiles numbered sides The Attacker battles from its
                            highest numbered side to its lowest Higher number
                            beats lower number and any number beats a blank side
                            Numbers touching the same value do nothing The
                            attackers blank sides are immune to being attacked.
                            The attacker can still take over black sides which
                            happens last in the attack order If 2 or more
                            attacking numbered sides have the same value then
                            the attacking order happeneds in a clockwise
                            direction starting from the top of the tile. Anytime
                            a tile loses a battle it will flip over to the
                            oppositions colour and perform a chain attack
                        </p>
                    </div>
                    <div>
                        <img
                            src={require("../assets/cosmic-inventory-1.png")}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <Line />
            <div className="section4">
                <div className="">
                    <div>CHAIN ATTACK</div>
                    <p>
                        A chain attack willl flip over any opposition tile
                        touching its numbered sides regardles of its number
                        Chaining doesn't occur when taking over a blank side
                    </p>
                </div>
                <div className="content">
                    <div>
                        <img
                            src={require("../assets/cosmic-inventory-2.png")}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <Line />
            <div className="section5">
                <div className="title">
                    <p>RULES</p>
                </div>
                <div>
                    <table>
                        <caption>Phase 1</caption>
                        <tr>
                            <td>Entry</td>
                            <td>2</td>
                            <td>CLOUD</td>
                        </tr>
                        <tr>
                            <td>Entry</td>
                            <td>2</td>
                            <td>CLOUD</td>
                        </tr>
                        <tr>
                            <td>Entry</td>
                            <td>2</td>
                            <td>CLOUD</td>
                        </tr>
                        <tr>
                            <td>Prize Payout</td>
                            <td>31</td>
                            <td>CLOUD</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="bottom-height"></div>
        </div>
    );
};

export default Main;
