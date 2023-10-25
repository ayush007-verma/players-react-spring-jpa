import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Players = () => {
    const navigate = useNavigate()
    const [allPlayers, setAllPlayers] = useState([])

    useEffect(()=>{
        console.log("render : /players")
    }, [allPlayers])
    
    const getAllPlayers = async () => {
        await axios
            .get("https://api.cricapi.com/v1/players?apikey=94a7a756-d5fd-47f8-9d77-44d1f45b0b2f&offset=0")
            .then((res) => {
                console.log(res.data.data)
                setAllPlayers(res.data.data)
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
                    <button onClick={() => navigate("/players/id")}>
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

export default Players