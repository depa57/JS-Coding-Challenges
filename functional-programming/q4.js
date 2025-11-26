const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
];

function findById(arr, id) {
  return arr.find(x => x.id === id);
}

console.log(findById(users, 2));
