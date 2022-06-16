export function getDetails(details) {
  let info = details.map((detail) => {
    return fetch(detail).then((res) => res.json());
  });

  return Promise.all(info);
}
