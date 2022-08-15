import Pokecard from "./Pokecard";
import '../../src/Pokedex.css';

function Pokedex(props) {

    let resultTitle;
    if (props.isWinner) {
        resultTitle = <h1 className='Pokedex-winner'>Winner!</h1>;
    } else {
        resultTitle = <h1 className='Pokedex-loser'>Loser!</h1>;
    }

    return (
        <div className="pokedex">
            <h1>Pokedex</h1>
            <p>Total XP: {props.exp}</p>
            <p>{resultTitle}</p>
            <div className='Pokedex-cards'>
                {props.pokemon.map((p) => (
                <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
             ))}
            </div>
        </div>
    );
}

export default Pokedex;