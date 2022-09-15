const arr = [
  { fname: "rahul", lname: "kashyap" },
  { fname: "anurag", lname: "kashyap" },
];

const obj = {
  fname: "satyanshu",
  lname: "kashyap",
};

// console.log(...arr);
console.log([...arr, { ...obj }]);
const res = arr.filter((item) => {
  return item.fname === "rahul";
});
console.log(res);
