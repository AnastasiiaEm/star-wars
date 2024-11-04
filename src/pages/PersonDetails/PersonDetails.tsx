import '@xyflow/react/dist/style.css'; 
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { getFilms } from "../../utils/films";
import { getStarships } from "../../utils/starships";
import { useQuery } from "@tanstack/react-query";
import { Flow } from "../../components/Flow/Flow";
import { Main } from '../../components/Main/Main';
import '../../styles/custom-node.css'
import '../../styles/custom-edge.css'
import { createNodes } from '../../utils/helpers/createNodes';
import { createEdges } from '../../utils/helpers/createEdges';

export const PersonDetails = () => {
  let { state } = useLocation();

  const { 
    isLoading: isLoadingFilms, 
    isError: isErrorFilms,
    error: errorFilms,
    data: filmsData } =
  useQuery({
    queryKey: ['films', state.id],
    queryFn: () => getFilms(state.id),
  });

  const { 
    isLoading: isLoadingStarships, 
    isError: isErrorStarships, 
    error: errorStarships, 
    data: starshipsData  } =
  useQuery({
    queryKey: ['starships', state.id],
    queryFn: () => getStarships(state.id),
  });

  if (isLoadingFilms || isLoadingStarships) {
    return <div>Loading...</div>;
  }

  if (isErrorFilms) {
    return <div>Error loading films: {errorFilms.message}</div>;
  }

  if (isErrorStarships) {
    return <div>Error loading starships: {errorStarships.message}</div>;
  }

  const initialNodes = filmsData && starshipsData ? createNodes(state, filmsData, starshipsData) : [];
  const initialEdges = filmsData && starshipsData ? createEdges(state, filmsData, starshipsData) : [];

  return (
    <>
      <Header />
      <Main>
        <Flow initialNodes={initialNodes} initialEdges={initialEdges} />
      </Main>
    </>
  );
};