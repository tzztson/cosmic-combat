import Caption from "../components/caption";
import Line from "../components/line";

const Main = () => {
    return (
        <div className="main">
            <div className="Cosmic-Container">
                <div className="Cosmic-Main">
                    <img src={require("../assets/cosmic-logo.png")} alt="" />
                </div>
                <Line />
                <div className="Cosmic-How-TODO">
                    <Caption title="GAME PLAY" />
                    <div className="content">
                        <img
                            src={require("../assets/cosmic-inventory-1.png")}
                            alt=""
                        />
                        <div className="requirements">
                            <p>Requirements</p>
                            <p>2Players</p>
                            <p>7 tile for each player</p>
                        </div>
                    </div>
                </div>
                <div className="Cosmic-Basic">
                    <div className="description">
                        <Caption title="THE BASICS" />
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
                    <div className="basic-content">
                        <img
                            src={require("../assets/cosmic-card-empty.png")}
                            width="100%"
                            alt=""
                        />
                    </div>
                    {/* <img id="panel-top-edge" src={topEdge} />
                    <img id="panel-bottom-edge" src={bottomEdge} /> */}
                </div>
                <div className="Cosmic-Battle-Logic">
                    <Caption title="BATTLE LOGIC" />
                    <div className="content">
                        <div>
                            <p>
                                The tile being placed down is known as the attacking
                                tile for that turn An attacking tile has to battle
                                all enemy numbered sides touching the attacking
                                tiles numbered sides.
                            </p>
                            <p>
                                The Attacker battles from its
                                highest numbered side to its lowest Higher number
                                beats lower number and any number beats a blank side
                                Numbers touching the same value do nothing The
                                attackers blank sides are immune to being attacked.
                            </p>
                            <p>
                                The attacker can still take over black sides which
                                happens last in the attack order If 2 or more
                                attacking numbered sides have the same value then
                                the attacking order happeneds in a clockwise
                                direction starting from the top of the tile.
                            </p>
                            <p>
                                Anytime a tile loses a battle it will flip over to the
                                oppositions colour and perform a chain attack
                            </p>
                        </div>
                        <img
                            src={require("../assets/cosmic-inventory-1.png")}
                            alt=""
                        />
                    </div>
                </div>
                <Line />
                <div className="Cosmic-Chain">
                    <div className="chain-attack">
                        <Caption title="CHAIN ATTACK" />
                        <p>
                            A chain attack willl flip over any opposition tile
                            touching its numbered sides regardles of its number
                            Chaining doesn't occur when taking over a blank side
                        </p>
                    </div>
                    <div className="attack-method">
                        <img
                            src={require("../assets/cosmic-inventory-2.png")}
                            alt=""
                        />
                    </div>
                </div>
                <Line />
                <div className="Cosmic-Table">
                    <Caption title="RULES" />
                    <div className="table-list">
                        <div className="phase-table">
                            <table>
                                <th colSpan='3'>Phase 1</th>
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
                        <div className="round-table">
                            <table>
                                <th></th>
                                <th>Round 1</th>
                                <th>Round 2</th>
                                <th>Round 3</th>
                                <th>Final Round</th>
                                <tr>
                                    <td>Players Paid:</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Prize value in CLOUD:</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Prize Payout:</td>
                                    <td>0</td>
                                    <td>1 CLOUD</td>
                                    <td>Phase 1 Ticket</td>
                                    <td>1st: Phase 2 Ticket</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2nd: 3 CLOUD</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="table-list">
                        <div className="phase-table">
                            <table>
                                <th colSpan="3">Phase 1</th>
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
                        <div className="round-table">
                            <table>
                                <th></th>
                                <th>Round 1</th>
                                <th>Round 2</th>
                                <th>Round 3</th>
                                <th>Final Round</th>
                                <tr>
                                    <td>Players Paid:</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Prize value in CLOUD:</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Prize Payout:</td>
                                    <td>0</td>
                                    <td>1 CLOUD</td>
                                    <td>Phase 1 Ticket</td>
                                    <td>1st: Phase 2 Ticket</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2nd: 3 CLOUD</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="table-list">
                        <div className="phase-table">
                            <table>
                                <th colspan="3">Phase 1</th>
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
                        <div className="round-table">
                            <table>
                                <th></th>
                                <th>Round 1</th>
                                <th>Round 2</th>
                                <th>Round 3</th>
                                <th>Final Round</th>
                                <tr>
                                    <td>Players Paid:</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Prize value in CLOUD:</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Prize Payout:</td>
                                    <td>0</td>
                                    <td>1 CLOUD</td>
                                    <td>Phase 1 Ticket</td>
                                    <td>1st: Phase 2 Ticket</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2nd: 3 CLOUD</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <Line />
                <div className="Cosmic-Getting-Tile">
                    <div className="tile-descritpion">
                        <Caption title="TILE" />
                        <p>210 tiles with 9 ranks of strength</p>
                        <p>Use your tiles battle opponents in Cosmic Combat</p>
                        <p>Gain CLOUD by vaporizing a tile</p>
                        <p>Your duplicate tiles can merge to form a stranger rank tile</p>
                        <Caption title="HOW TO GET TILES" />
                        <p>Mint tiles from the website - cosmiccombat.io</p>
                        <p>Buy tiles from tge secondary markets - jpg.store</p>
                        <p>Craft tiles using 20 CLOUD.</p>
                    </div>
                    <div className="full-tile">
                        <img src={require('../assets/cosmic-card-full.png')} alt="" />
                    </div>
                </div>
                <Line />
                <div className="Cosmic-Cloud">
                    <div className="cloud-description">
                        <Caption title="CLOUD" />
                        <p>CLOUD is used inside the Cosmic game with various utility</p>
                        <p>CLOUD has no value isn't sold on the markets</p>
                        <Caption title="UTILITY" />
                        <p>Minting a new tile for 20 CLOUD</p>
                        <p>Upgrading a tile requires 5 CLOUD</p>
                        <p>Entering Phase Tournaments.</p>
                        <Caption title="TOKENOMICS" />
                        <p>CLOUD will start with  0 supply with no allocation to any party When a tile is vaporized it will turn into 15 CLOUD, increasing the supply</p>
                        <p>CLOUD is burnt when minting/upgrading tiles, decreasing the total supply</p>
                        <p>Phase Tournament also burn a small amount each tournament played</p>
                    </div>
                    <div className="cloud-chain">
                        <img src={require('../assets/cosmic-cloud.png')} alt="" />
                    </div>
                </div>
                <Line />
                <div className="Cosmic-Rules">
                    <div className="rule-chart">
                        <Caption title="RULES" />
                        <div className="Cosmic-Empty"></div>
                        <div className="rule-chart">
                            <img src={require('../assets/cosmic-chart.png')} alt="" />
                        </div>
                    </div>
                </div>
                <Line />
                <div className="Cosmic-Tiles-Ranks">
                    <Caption title="TILES RANKS" />
                    <div>
                        <p className="middle-height"></p>
                        <table>
                            <th>Free to Earn</th><th>Mint Chance</th>
                            <tr><td>Rank 1  =  6 points</td><td>50%</td></tr>
                            <tr><td>Rank 2  =  9 points</td><td>35%</td></tr>
                            <tr><td>Rank 3  =  12 points</td><td>15%</td></tr>
                        </table>
                    </div>
                    <div>
                        <p className="middle-height"></p>
                        <table>
                            <th>Free to Earn</th><th>Mint Chance</th>
                            <tr><td>Rank 4  =  15 points</td><td>30%</td></tr>
                            <tr><td>Rank 5  =  18 points</td><td>25%</td></tr>
                            <tr><td>Rank 6  =  21 points</td><td>20%</td></tr>
                            <tr><td>Rank 7  =  24 points</td><td>15%</td></tr>
                            <tr><td>Rank 8  =  27 points</td><td> 9%</td></tr>
                            <tr><td>Rank 9  =  30 points</td><td> 1%</td></tr>
                        </table>
                    </div>
                </div>
                <Line />
                <div></div>
                <img src={require('../assets/cosmic-global.png')} alt='' />
            </div>
        </div>
    );
};

export default Main;
