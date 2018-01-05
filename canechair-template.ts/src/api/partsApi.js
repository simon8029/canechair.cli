import 'whatwg-fetch';

/* eslint-disable no-console */
export function getParts() {
  return get('canechair-parts');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(res) {
  return res.json();
}

function onError(error) {
  console.log(error);
}
