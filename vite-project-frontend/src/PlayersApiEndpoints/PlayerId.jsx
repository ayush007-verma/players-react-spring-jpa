import { useEffect, useState } from 'react'
import './../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlayerId = () => {
    const navigate = useNavigate()
    const [playerInfo, setPlayerInfo] = useState([])

    useEffect(()=>{
        console.log("render : /players/id")
    },[playerInfo])

    const getPlayerId = async () => {
        

        await axios
            .get("https://api.cricapi.com/v1/players_info?apikey=94a7a756-d5fd-47f8-9d77-44d1f45b0b2f&id=fb9f80fc-1355-492c-bafb-03636252acd9&id=fb9f80fc-1355-492c-bafb-03636252acd9")
            .then((res) => {
                console.log("setting state..")
                console.log("final state ", [...playerInfo, res.data.data])
                setPlayerInfo([...playerInfo, res.data.data])
            })
            .catch((err) => {
                console.log(err)
            })

        console.log(playerInfo)  
    }

    return (
        <>

            <header>
                <div className="card">
                    <button onClick={() => navigate("/")}>
                        Home
                    </button>
                    <button onClick={() => navigate("/players")}>
                        get all players
                    </button>
                    <button onClick={() => navigate("/players/id")}>
                        get player by id
                    </button>
                    
                </div>
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
                                    {
                                        console.log(player, key)
                                    }
                                    <h1>{player.name}</h1>
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
