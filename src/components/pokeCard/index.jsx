import React, {useState , useEffect} from "react"
import Navi from "../nav";
import './style.css';
import { Link } from "react-router-dom";






function Pokecard({pokemon}) {

    let [pokarray, updatepokearray] = useState ([])

    useEffect(() => {
        pokemon.types.forEach(p => {
            pokarray.push(p.type.name)
            updatepokearray([...pokarray])

     
        });
   
    }, []);



console.log(pokemon)


    return (
        <React.Fragment>
            
            <Link to ={`/details/${pokemon.id}`} state={pokemon}>
            <div className='container_imagen_fondo'>
                <div className='pokemon__container'>

                    <div className='card__container'>
                        <article className="card">
                            <div className='info__container'>
                                <div className='img___container'>
                                    <img src={pokemon.sprites.other.dream_world.front_default} className='img'></img>
                                </div>
                                <div className='info'>
                                    <div className='name__container'><h2 className="name__pokemon">{pokemon.name}</h2></div>
                                    {pokarray.map((c, i) =><div className='type__container'><p key={i}>{c}</p></div>)}
                                    <div className='id__container'><p className='id__pokemon'>{pokemon.id}</p></div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
            </Link>
        </React.Fragment >
    )
}

export default Pokecard;