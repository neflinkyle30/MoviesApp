import {IMovies} from "../interfaces/movies.interfaces";
import moviesService from "../../../services/movies.service";
import {useQuery} from "react-query";



export const UseMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: (): Promise<IMovies[]> =>
      moviesService.get("api/Movies").then(res => res.data),
    keepPreviousData: true
  });
};