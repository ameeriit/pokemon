import { useState } from "react";
import { Filter } from "./Filter";
import PokemonList from "./Pokemons/PokemonList";

export default function PokemonDetailsSection() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <h1 className="py-6 text-6xl font-semibold text-center">All Pokémons</h1>
      <Filter onSearchChange={handleSearchChange} />
      <PokemonList searchTerm={searchTerm} />
    </>
  );
}
