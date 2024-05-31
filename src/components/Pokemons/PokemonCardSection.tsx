import { useState } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

import Filter from "../Filter";
import LoadingSpinner from "../LoadingSpinner";
import PokemonCard from "./components/PokemonCard";

import { getPokemonList } from "../../api/getPokemonList";
import { client } from "../../config/queryClients";

export default function PokemonCardSection() {
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const fetchPokemonList = async ({ pageParam = 0 }) => {
    const response = await getPokemonList({ limit: 20, offset: pageParam });
    return response;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    {
      queryKey: ["pokemonList"],
      queryFn: fetchPokemonList,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        if (!lastPage.next) {
          return undefined;
        }
        const offset = new URL(lastPage.next).searchParams.get("offset");
        return offset ? parseInt(offset, 10) : undefined;
      },
    },
    client
  );

  const pokemonData = data?.pages.flatMap((page) => page.results);

  const filteredPokemon = pokemonData?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(localSearchTerm.toLowerCase())
  );

  return (
    <>
      <Filter
        localSearchTerm={localSearchTerm}
        handleSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLocalSearchTerm(e.target.value)
        }
      />
      {error && (
        <p className="text-red-500 font-semibold text-xl">
          Error: {error.message}
        </p>
      )}

      <InfiniteScroll
        className="!overflow-hidden"
        dataLength={filteredPokemon?.length ?? 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={localSearchTerm && !(<LoadingSpinner />)}
        endMessage={
          isFetching &&
          isFetchingNextPage &&
          !(
            <span className="bg-teal-600 text-center block mb-12 text-slate-200 text-xl py-4">
              Yay You have seen it all
            </span>
          )
        }
      >
        {/* pokemon details section */}
        <section className="pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-8">
            {filteredPokemon?.map((pokemon: any, index: any) => (
              <div key={`${pokemon.name}-${index}`}>
                <PokemonCard url={pokemon.url} />
              </div>
            ))}
          </div>
        </section>
      </InfiniteScroll>
    </>
  );
}
