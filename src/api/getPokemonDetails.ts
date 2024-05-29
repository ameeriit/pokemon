import axios from "axios";
import { apiClient } from "../config/axios";

export async function getPokemonDetails(pokemonDetailsUrl: string) {
  try {
    const response = await apiClient.get(pokemonDetailsUrl);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch Pokémon details."
      );
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
}
