type MapStringCallBack = (item: string) => string;

function mapStrings(
  array: string[],
  callbackFunction: MapStringCallBack,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackFunction(item));
  }

  return newArray;
}

const abc = ["a", "b", "c"];
const newArray = mapStrings(abc, (item) => item.toUpperCase());
console.log(newArray);
