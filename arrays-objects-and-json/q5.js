function deepshallowcopy() {
  const original = {
    name: "deepa",
    address: { city: "Lalitpur" }
  };
  const shallow = { ...original };
  const deep = JSON.parse(JSON.stringify(original));
  shallow.address.city = "Pokhara";
  deep.address.city = "Kathmandu";

  console.log("Original:", original);
  console.log("Shallow Copy:", shallow);
  console.log("Deep Copy:", deep);
}
deepshallowcopy();