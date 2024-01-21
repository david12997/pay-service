const parseQueryStringQueryParams = (queryParamsString: string): any => {
    return queryParamsString
        .split("&")
        .map(pair => pair.split("=").map(decodeURIComponent))
        .reduce((acc, [key, value = null]) => ({ ...acc, [key]: value }), {});
}

export default parseQueryStringQueryParams;