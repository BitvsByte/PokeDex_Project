import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Pokecard from '../../components/pokeCard';
import Navi from '../../components/nav';
import './style.css';
import Notfound from '../notfound';
import {useNavigate} from 'react-router-dom'



function Pokelist() {
    

    const [pokemon, upDatePokemon] = useState([]);                      // array principal  inicialmente pokemon estaba en el map
    const [filteredArray, updateArray] = useState('');                  // paginacion  con la paginacion es filterdarray quien esta en el map

    const handleOnChange = e => {                                           // filtro
        
        const newValue = e.target.value.toLowerCase();
        const newArray = pokemon.filter(a => a.name.toLowerCase().includes(newValue));
        updateArray(newArray); 
    }


    let [hola, holaactual] = useState('https://pokeapi.co/api/v2/pokemon')

    let next = () => {
        updateArray('')
        fectchPokemons(hola.next)
   

    }
    let prev = () => {
        updateArray('')
        fectchPokemons(hola.previous)
 

    }
    console.log(hola)

    useEffect(() => {
        fectchPokemons(hola)
        
    }, []);



    let fectchPokemons = (url) => {         // la API ahora esta en ectchPokemons

        fetch(url)
            .then(r => r.json())
            .then(c => {
                holaactual(c)
                

                c.results.forEach(v => {
                    fetch(v.url)
                        .then(r => r.json())
                        .then(data => {
                            console.log(data)



                           
                            upDatePokemon((pokemon) => [...pokemon, data].sort((a, b) => a.id > b.id ? 1 : -1))               // ordenar los array
                            updateArray((pokemon) => [...pokemon, data].sort((a, b) => a.id > b.id ? 1 : -1))


                        })
                })
            });



    }


    
    return(
        <>
        
            <Navi change={handleOnChange}></Navi>

            <div className='prevnext__btn__container'>
            {prev=hola.previous ? <button className='prevnext__btn' onClick={prev}>Prev</button> :null}
   
            {next=hola.next ? <button className='prevnext__btn' onClick={next}>Next</button> : null}
            
            </div>

            <div className='hola__que__tal'>

                {filteredArray.length === 0 ? <h2>loading...</h2> : filteredArray.map((v,i) => <Pokecard key={i} pokemon={v}></Pokecard>)}
            </div>
            



        </>
    )
       
}

export default Pokelist;