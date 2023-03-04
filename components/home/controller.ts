/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useInView } from "react-intersection-observer";

import { api } from "@/lib/api";

export function useHomePage() {
  const { ref, inView } = useInView();
  const query = api.albums.getInfiniteAlbums.useInfiniteQuery(
    {
      limit: 12,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  console.log(inView);

  React.useEffect(() => {
    if (inView) query.fetchNextPage();
  }, [inView]);

  return {
    ref,
    data: query.data,
    albums: query.data?.pages.flatMap((page) => page.albums),
    status: query.status,
    error: query.error,
    isLastPage: !query.hasNextPage && !query.isFetchingNextPage,
    isLoading: query.isFetchingNextPage,
    backgroundIsUpdating: query.isFetching && !query.isFetchingNextPage,
  };
}
