import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import {  endpoints } from 'src/utils/axios';
import { axiosReq } from 'src/utils/axiosReq';

// ----------------------------------------------------------------------
const fetcher = async (url) => {

  const response = await axiosReq.get(url);
  return response.data;
};

export function useGetPosts() {
  const URL = endpoints.service.list;

  const { data, error, isValidating } = useSWR(URL, fetcher);
  
  const isLoading = !data && !error && isValidating;
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const services = data?.data || [];

  const memoizedValue = useMemo(
    () => ({
      services ,
      servicesLoading: isLoading,
      servicesError: error,
      servicesValidating: isValidating,
      servicesEmpty: !isLoading && !services.length,
    }),
    [services, error, isLoading, isValidating,]
  );

  return memoizedValue;
}
// ----------------------------------------------------------------------

export function useGetProducts() {
  const URL = endpoints.products.list;

  const { data, error, isValidating } = useSWR(URL, fetcher);
  
  const isLoading = !data && !error && isValidating;
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const products = data?.data || [];

  const memoizedValue = useMemo(
    () => ({
      products ,
      productsLoading: isLoading,
      productsError: error,
      productsValidating: isValidating,
      productsEmpty: !isLoading && !products.length,
    }),
    [products, error, isLoading, isValidating,]
  );

  return memoizedValue;
}
// ----------------------------------------------------------------------

export function useGetHeader() {
  const URL =  '/layout' ;

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const header = data?.header;
  const memoizedValue = useMemo(
    () => ({
      header,
      headerLoading: isLoading,
      headerError: error,
      headerValidating: isValidating,
    }),
    [header, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetFooter() {
  const URL =  '/layout' ;

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const footer = data?.footer;
  const memoizedValue = useMemo(
    () => ({
      footer,
      footerLoading: isLoading,
      footerError: error,
      footerValidating: isValidating,
    }),
    [footer, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetHero() {
  const URL =  '/data/home';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const hero = data?.hero;
  const memoizedValue = useMemo(
    () => ({
      hero,
      heroLoading: isLoading,
      heroError: error,
      heroValidating: isValidating,
    }),
    [hero, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetPlatformHero() {
  const URL =  '/data/platform';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const hero = data?.hero;
  const memoizedValue = useMemo(
    () => ({
      hero,
      heroLoading: isLoading,
      heroError: error,
      heroValidating: isValidating,
    }),
    [hero, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetChallenges() {
  const URL =  '/data/home';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const challenges = data?.challenges;
  const memoizedValue = useMemo(
    () => ({
      challenges,
      challengesLoading: isLoading,
      challengesError: error,
      challengesValidating: isValidating,
    }),
    [challenges, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetAbout() {
  const URL =  '/data/home';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const about = data?.about;
  const memoizedValue = useMemo(
    () => ({
      about,
      aboutLoading: isLoading,
      aboutError: error,
      aboutValidating: isValidating,
    }),
    [about, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetPlatformAbout() {
  const URL =  '/data/platform';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const about = data?.about;
  const memoizedValue = useMemo(
    () => ({
      about,
      aboutLoading: isLoading,
      aboutError: error,
      aboutValidating: isValidating,
    }),
    [about, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetAdvantage() {
  const URL =  '/data/home';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const advantage = data?.advantage;
  const memoizedValue = useMemo(
    () => ({
      advantage,
      advantageLoading: isLoading,
      advantageError: error,
      advantageValidating: isValidating,
    }),
    [advantage, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetAvenues() {
  const URL =  '/data/home';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const avenues = data?.avenues;
  const memoizedValue = useMemo(
    () => ({
      avenues,
      avenuesLoading: isLoading,
      avenuesError: error,
      avenuesValidating: isValidating,
    }),
    [avenues, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetTrusted() {
  const URL =  '/data/home';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const trusted = data?.trusted;
  const memoizedValue = useMemo(
    () => ({
      trusted,
      trustedLoading: isLoading,
      trustedError: error,
      trustedValidating: isValidating,
    }),
    [trusted, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetInsights() {
  const URL =  '/data/home';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const latestInsights = data?.latestInsights;
  const memoizedValue = useMemo(
    () => ({
      latestInsights,
      latestInsightsLoading: isLoading,
      latestInsightsError: error,
      latestInsightsValidating: isValidating,
    }),
    [latestInsights, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetModular() {
  const URL =  '/data/home';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const modular = data?.modular;
  const memoizedValue = useMemo(
    () => ({
      modular,
      modularLoading: isLoading,
      modularError: error,
      modularValidating: isValidating,
    }),
    [modular, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetThree() {
  const URL =  '/data/platform';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const three = data?.forAll;
  const memoizedValue = useMemo(
    () => ({
      three,
      threeLoading: isLoading,
      threeError: error,
      threeValidating: isValidating,
    }),
    [three, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetCustomerWords() {
  const URL =  '/data/home';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const customerWords = data?.customerWords;
  const memoizedValue = useMemo(
    () => ({
      customerWords,
      customerWordsLoading: isLoading,
      customerWordsError: error,
      customerWordsValidating: isValidating,
    }),
    [customerWords, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetLogisticsSolutions() {
  const URL =  '/data/home';

  const { data, error, isValidating } = useSWR(URL, fetcher);
  const isLoading = !data && !error && isValidating;
  const logisticsSolution = data?.logisticsSolution;
  const memoizedValue = useMemo(
    () => ({
      logisticsSolution,
      logisticsSolutionLoading: isLoading,
      logisticsSolutionError: error,
      logisticsSolutionValidating: isValidating,
    }),
    [logisticsSolution, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetLatestProducts() {
  const URL =  '/products';

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      latestProducts: data?.data || [],
      latestProductsLoading: isLoading,
      latestProductsError: error,
      latestProductsValidating: isValidating,
      latestProductsEmpty: !isLoading && !data?.data.length,
    }),
    [data?.data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useSearchPosts(query) {
  const URL = query ? [endpoints.post.search, { params: { query } }] : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher, {
    keepPreviousData: true,
  });

  const memoizedValue = useMemo(
    () => ({
      searchResults: data?.results || [],
      searchLoading: isLoading,
      searchError: error,
      searchValidating: isValidating,
      searchEmpty: !isLoading && !data?.results.length,
    }),
    [data?.results, error, isLoading, isValidating]
  );

  return memoizedValue;
}
