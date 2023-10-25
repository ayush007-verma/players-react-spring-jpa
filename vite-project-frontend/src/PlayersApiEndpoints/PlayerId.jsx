import { useEffect, useState } from 'react'
import './../App.css'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import "./Players.css"

const PlayerId = () => {
    const navigate = useNavigate()
    const [playerInfo, setPlayerInfo] = useState([])

    const { playerId } = useParams();

    useEffect(()=>{
        console.log("render : /players/id")
        // console.log(playerInfo)
    },[playerInfo])

    const id = 1
    const getPlayerId = async () => {
        await axios
            .get("http://localhost:8080/api/player?id=" + playerId)
            .then((res) => {
                // console.log("final state ", [...playerInfo, res.data])
                setPlayerInfo([...playerInfo, res.data])
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <>

            <header>
                {/*<div className="card">*/}
                    <button onClick={() => navigate("/")}>
                        Home
                    </button>
                    <button onClick={() => navigate("/players")}>
                        get all players
                    </button>
                    <button onClick={() => navigate("/players/id/:playerId")}>
                        get player by id
                    </button>
                {/*</div>*/}
            </header>

            <main>
                <h4> get data for player with id ... </h4>
                <h4> call api... </h4>
                <div className="card">
                    <button onClick={() => getPlayerId() }> call api.. </button>
                </div>

                <div className="player-info">
                    {
                        playerInfo.map((player, key) => {
                            return (
                                <div key={key}>
                                    <h1>{player.name}</h1>
                                    <h4>{player.country}</h4>
                                    <h4>{player.role}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default PlayerId;
