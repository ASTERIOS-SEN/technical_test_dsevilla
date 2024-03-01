import {CharacterGrid} from "@/app/characters";

const getPersonajes = async () => {
    const data = await fetch(
        'https://rickandmortyapi.com/api/character'
    ).then((res) => res.json());

    const personajes = data.results.map((person) => ({
        id: person.id,
        name: person.name,
        status: person.status,
        species: person.species,
        type: person.type,
        gender: person.gender,
        image: person.image,
        url: person.url,
        created: person.created,
    }));

    return personajes;
};

export default async function CharactersPage() {
    const personajes = await getPersonajes();

    return (
        <div className="flex flex-col">
      <span className="text-white my-2 text-5xl">
          Personajes
      </span>
            <CharacterGrid personajes={personajes}/>
        </div>
    );
}
