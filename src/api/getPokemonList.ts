import axios from "axios";
import { apiClient } from "../config/axios";

export async function getPokemonList() {
  try {
    const response = await apiClient.get("pokemon");
    const spellsList = response.data;
    return spellsList;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while fetching spells."
      );
    } else {
      throw new Error("Something went wrong. Please try again later.");
    }
  }
}
