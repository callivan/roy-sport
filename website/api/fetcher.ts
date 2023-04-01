interface IFetcherProps {
  path: 'sneakers' | 'cloths' | 'specials';
  isClientSide?: boolean;
}

export function fetcher({ path, isClientSide = false }: IFetcherProps) {
  const abortController = new AbortController();
  const signal = abortController.signal;

  console.log(process.env);

  const url = (isClientSide ? 'http://localhost:1337/api/' : 'http://cms:1337/api/') + path;

  return {
    fetch: () => fetch(url, { signal }).then((res) => res.json()),
    abort: abortController.abort,
  };
}
