import Pokedex from "./Pokedex";

function Pokegame() {

    Pokegame.defaultProps = {
        pokemon: [         
            {id: 4, name: 'Charmander', type: 'Fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'Water', base_experience: 63},          
            {id: 11, name: 'Metapod', type: 'Bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'Flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'Electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'Normal', base_experience: 95},          
            {id: 94, name: 'Gengar', type: 'Poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'Normal', base_experience: 65},           
            {id: 137, name: 'Porygon', type: 'Normal', base_experience: 65},
            {id: 142, name: 'Aerodactyl', type: 'Rock', base_experience: 180},          
            {id: 150, name: 'Mewtwo', type: 'Psychic', base_experience: 230},
            {id: 181, name: 'Magnemite', type: 'Steel', base_experience: 50},         
            {id: 208, name: 'Steelix', type: 'Steel', base_experience: 72},
            {id: 245, name: 'Lugia', type: 'Psychic', base_experience: 306},
        ]
    };

    let firstHand = [];
    let secondHand = [...Pokegame.defaultProps.pokemon];

    while (firstHand.length < secondHand.length) {
        let randomIndex = Math.floor(Math.random() * secondHand.length);
        firstHand.push(secondHand.splice(randomIndex, 1)[0]);
    }

    let experienceOne = firstHand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let experienceTwo = secondHand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
        <div className="pokegame">
            <Pokedex pokemon={firstHand} exp={experienceOne} isWinner={experienceOne > experienceTwo} />
            <Pokedex pokemon={secondHand} exp ={experienceTwo} isWinner={experienceTwo > experienceOne}/>
        </div>
    );
}

export default Pokegame;