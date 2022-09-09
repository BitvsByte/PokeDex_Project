import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom'
import Navi from "../../components/nav";
import { Link } from "react-router-dom";
import './style.css';
import bolaque from '../../assets/img/bolaqueflipas.jpg'






function Details() {
  let pokemon = useLocation();
  let r = pokemon.state

  let [typePokes, updateTypePokes] = useState([])


  useEffect(() => {
    r.types.forEach((p) => {
      typePokes.push(p.type.name);
      updateTypePokes([...typePokes])

    })


  }, []);


  let [newStats, updateNewStats] = useState([])
  let [bottomStats, updateBotttomStats] = useState([])

  useEffect(() => {
    r.stats.forEach((s) => {
      newStats.push(s.stat.name)
      updateNewStats([...newStats])
      bottomStats.push(s.base_stat)
      updateBotttomStats([...bottomStats])

    })


  }, []);



  return (

    <React.Fragment>

      <Navi></Navi>

      <div className='pokecard__container'>
        <div className='left__side'>
          <div className='left_states1'>
            <p className='titules'>ID</p>
            <p className='letters'>#{r.id}</p>
          </div>
          <div className='left_states2'>
            <p className='titules'>Height</p>
            <p className='letters'>{r.height / 100}m</p>
          </div>
          <div className='left_states3'>
            <p className='titules'>Abilities:</p>
            <div className='abilities__container'>
              {r.abilities.map((e, i) => <div key={i} className='abilities'><p className='letters'>{e.ability.name.toUpperCase()}</p></div>)}
            </div>
          </div>


          <div className='left_states5' >
            <p className='titules'>Type:</p>
            {typePokes.map((type, i) => (<div id={type}><p key={r.id} className='letters'>{type.toUpperCase()}</p></div>))}

          </div>
          <div className='left_states4'>
            <p className='titules'>Form</p>
            {/* {r.forms.map(e => e.name)} */}
            {r.forms.map(e => (<div><p className='letters'>{e.name.toUpperCase()}</p></div>))}
          </div>


        </div>
        <div className='foto'>
          <h1 className='pokename__details'>{r.name.toUpperCase()}</h1>
          <Link to={`/details/${r.id}/${r.name}`} state={r}> <img className='img__pokemon_details' src={r.sprites.other.home.front_default} /> </Link>

        </div>
        <div className='right_state'>
          <div className="status__details">
            {newStats.map(stat => <div><p className='titules'>{stat.toUpperCase()}</p></div>)}

          </div>
          <div className='status__details'>
            {bottomStats.map(bottomStats => <div className='bottom__stat'><p className='letters'>{bottomStats}</p></div>)}

          </div>
        </div>





      </div>




    </React.Fragment>


  );
}

export default Details;
  