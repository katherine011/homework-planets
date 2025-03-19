export const [first, setFirst] = useState(true);
export const [second, setSecond] = useState(false);
export const [third, setThird] = useState(false);

export function firstModal() {
  setFirst(first);
  setSecond(!second);
  setThird(!third);
}

export function secondModal() {
  setFirst(!first);
  setSecond(second);
  setThird(!third);
}
export function thirdModal() {
  setFirst(!first);
  setSecond(!second);
  setThird(third);
}
