import {CharacterCard, CharacterFavoriteCard} from "../index";

export const CharacterGrid = ({personajes, isFavorite = false}) => {
    return (
        <div className="flex flex-wrap gap-5 items-center justify-center">
            {personajes.length === 0 &&
                <div className='mx-auto right-0 mt-4 w-60'>
                    <div className='flex flex-col bg-white rounded overflow-hidden shadow-lg'>
                        <div className='flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b'>
                            <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>No tienes favoritos</p>
                        </div>
                    </div>
                </div>}
            {personajes.map((item) => {
                const {id} = item;
                return (
                    <>
                        {isFavorite ? <CharacterFavoriteCard key={id} personaje={item}/> : <CharacterCard key={id} personaje={item}/>}
                    </>
                );
            })}
        </div>
    );
};
