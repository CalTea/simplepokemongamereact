import '../../src/Pokecard.css';

const POKEIMG = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

function Pokecard(props) {
    let imgSrc = POKEIMG + padToThree(props.id) + '.png'
    return (
        <div className='Pokecard' > 
            <h1> {props.name}</h1>
            <img src={imgSrc} alt={props.name} />
            <div className='Pokecard-data'>Type: <strong>{props.type}</strong></div>
            <div className='Pokecard-data'>Experience: <strong>{props.base_experience}</strong></div>
        </div>

    );
}

export default Pokecard;
