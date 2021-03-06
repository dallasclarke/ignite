import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

// Action Creator
export const loadGames = () => async (dispatch) => {
  // Fetch AXIOS
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(upcomingGamesURL());
  const upcomingData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
