import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Players.css"

const Players = () => {
    const navigate = useNavigate()
    const [allPlayers, setAllPlayers] = useState([])

    useEffect(()=>{
        console.log("render : /players")
    }, [allPlayers])
    
    const getAllPlayers = async () => {
        await axios
            .get("http://localhost:8080/api/players")
            .then((res) => {
                console.log("rest api called -> ")
                console.log(res.data)
                setAllPlayers(res.data)
            })
            .catch((err)=> {
                console.log(err)
            })
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
                    <button onClick={() => navigate("/players/id/:playerId")}>
                        get player by id
                    </button>
                </div>
            </header>
            <main>
                <h4> get data for all players ... </h4>
                <h4> call api... </h4>
                <div className="card">
                    <button onClick={() => getAllPlayers() }> call api.. </button>
                </div>

                <div className="player-info">
                    {
                        allPlayers.map((player, key) => {
                            return (
                                <div key={key}>
                                    {
                                        console.log(player, key)
                                    }
                                    <h4>{player.rank} - {player.name} : {player.country}</h4>
                                    <button onClick={() => navigate(`/players/id/${player.id}`)}> call api with id.. </button>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </>
    )

}

export default Players