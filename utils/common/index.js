export const pipe = (...fns) => x =>
  fns.reduce((y, f) => f(y), x);

export const preventDefault = e => value => {
  e.preventDefault();
  return value;
}