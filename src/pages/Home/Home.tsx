import { Header } from "../../components/Header/Header";
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getPeople } from '../../utils/people';
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Main } from "../../components/Main/Main";
import { Pagination } from "../../components/Pagination/Pagination";
import { PeopleList } from "../../components/PeopleList/PeopleList";
import './Home.css';
import { LoadingIndicator } from "../../components/UI/LoadingIndicator/LoadingIndicator";
import { ErrorBlock } from "../../components/UI/Error/ErrorBlock";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(pageParam);

  const { isLoading, isError, error, data, isPlaceholderData } =
  useQuery({
    queryKey: ['people', page],
    queryFn: () => getPeople(page),
    placeholderData: keepPreviousData,
    staleTime: 120000,
  });

  useEffect(() => {
    setPage(pageParam);
  }, [pageParam]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setSearchParams({ page: newPage.toString() });
  };

  return (
    <>
      <Header />
      <Main>
      <h1 className="home__title">Explore the Galaxy</h1>
      {isLoading ? (
        <LoadingIndicator />
      ) : isError ? (
        <ErrorBlock title={error.name} message="Failed to fetch data"/>
      ) : (
        <PeopleList people={data.results}/>
      )}
      <Pagination
          page={page}
          isPlaceholderData={isPlaceholderData}
          hasNextPage={!!data?.next}
          onPageChange={handlePageChange}
        />
        </Main>
    </>
  );
};
