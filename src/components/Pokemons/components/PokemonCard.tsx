import { useQuery } from "@tanstack/react-query";

import Divider from "../../Divider";

import { getPokemonDetails } from "../../../api/getPokemonDetails";
import { client } from "../../../config/queryClients";
import type {
  Ability,
  PokemonDetailsProps,
  PokemonDetailsType,
  Stat,
  Type,
} from "../../../types/interface";

export default function PokemonCard({ url }: PokemonDetailsProps) {
  const { data: pokemonDetails, isPending } = useQuery<PokemonDetailsType>(
    {
      queryKey: ["spellDetailsData", url],
      queryFn: () => getPokemonDetails(url),
    },
    client
  );

  if (isPending) {
    return <div className="shimmer-animation" />;
  }

  return (
    <div className="border-teal border-[1px] border-solid rounded-2xl shadow-sm px-6 pt-3 pb-4 bg-teal-50 hover:cursor-pointer">
      <div className="flex justify-center">
        <img
          className="w-40 h-auto"
          src={pokemonDetails?.sprites?.front_default} // Using optional chaining
          alt={`${pokemonDetails?.name}`}
        />
      </div>
      <h2 className="font-bold capitalize text-center text-3xl">
        {pokemonDetails?.name}
      </h2>

      <div className="py-4">
        <h4 className="text-lg font-semibold mb-1">
          <span>Base Experience:</span> {pokemonDetails?.base_experience}
        </h4>
        <Divider />
        <div className="mb-3">
          <h4 className="text-lg font-semibold mb-1">Types</h4>

          <ul className="flex gap-2">
            {pokemonDetails?.types.map((type: Type) => (
              <li
                className="bg-teal-400 inline-block rounded-full px-4 py-[2px] capitalize text-slate-100  text-sm"
                key={type.type.name}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
        <Divider />
        <div className="mb-3">
          <h4 className="text-lg font-semibold mb-1">Abilities</h4>
          <ul className="flex gap-2 flex-wrap">
            {pokemonDetails?.abilities.map((ability: Ability) => (
              <li
                className="bg-teal-400 inline-block rounded-full px-4 py-[2px] capitalize text-slate-100 text-sm"
                key={ability.ability.name}
              >
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
        <Divider />
        <div className="mb-3">
          <h4 className="text-lg font-semibold mb-1">Stats</h4>
          <ul>
            {pokemonDetails?.stats.map((stat: Stat) => (
              <li
                className="flex items-center justify-between mb-2"
                key={stat.stat.name}
              >
                <h4 className="w-1/3 font-medium capitalize">
                  {stat.stat.name}
                </h4>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mx-2">
                  <div
                    className="h-full bg-teal-400"
                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
                <span className="w-12 text-right">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
