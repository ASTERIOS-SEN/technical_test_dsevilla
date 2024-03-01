import { Personaje } from "../index";
import { CharacterCard } from "../index";

interface Props {
  personajes: Personaje[];
}

export const CharacterGrid = ({ personajes }: Props) => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {personajes.map((item) => {
        const { id } = item;
        return (
          <>
            <CharacterCard key={id} personaje={item} />
          </>
        );
      })}
    </div>
  );
};
