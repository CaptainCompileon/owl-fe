function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
//TODO: introduce type of result
const sparqlQuery = async (namespace, query, endpoint = 'http://localhost:9999', fullUrl) => {
  const url = fullUrl ? fullUrl : `${endpoint}/blazegraph/namespace/${namespace}/sparql`;
  return fetch(url + 'query?' + new URLSearchParams({
    query: query,
    format: 'json',
  }).toString(), {
    method: 'GET',
  });
};
const sparqlAskQuery = async (namespace, query, endpoint = 'http://localhost:9999', fullUrl) => {
  const url = fullUrl ? fullUrl : `${endpoint}/blazegraph/namespace/${namespace}/sparql`;
  return fetch(url + 'queryBoolean?' + new URLSearchParams({
    query: query,
    format: 'json',
  }).toString(), {
    method: 'GET',
  });
};
const sparqlUpdateQuery = async (namespace, query, endpoint = 'http://localhost:9999', fullUrl) => {
  const url = fullUrl ? fullUrl : `${endpoint}/blazegraph/namespace/${namespace}/sparql`;
  return fetch(url + 'queryUpdate?' + new URLSearchParams({
    query: query,
  }).toString(), {
    method: 'GET',
  });
};
const removePrefix = (prefix, str) => {
  return str.replace(new RegExp(`^${prefix}`), '');
};

export { sparqlAskQuery as a, sparqlUpdateQuery as b, removePrefix as r, sparqlQuery as s };

//# sourceMappingURL=utils-007b714b.js.map