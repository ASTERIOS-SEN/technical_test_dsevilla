'use client'
import {CharacterGrid} from "@/app/characters";
import {useEffect, useState} from "react";


export default function CharactersPage() {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);
    //const personajes = await getPersonajes();
    const getPersonajes = async () => {
        setLoading(true)
        const data = await fetch(
            'http://localhost:3000/api/favorites'
        ).then((res) => res.json()).finally(() => setLoading(false));

        const personajes = data.data.map((person) => ({
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

        setPersonajes(personajes);
    };

    useEffect(() => {
        getPersonajes()
    }, []);

    if (loading) return <div className='flex flex-wrap gap-5 items-center justify-center'>
        <p className="text-white my-2 text-5xl text-center">Loading...</p></div>;

    return (
        <div className="flex flex-col">
          <span className="text-white my-2 text-5xl">
              Tus Favoritos
          </span>
            <CharacterGrid personajes={personajes} isFavorite/>
        </div>
    );
}
