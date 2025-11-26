function getCity(user) {
    try{
    return user.address.current.city;
    }
    catch(e){
        return 'unknown';
    }
}

console.log(getCity({
  address: {
    current: {
      city: "balkumari"
    }
  }
}));

// console.log(getCity({
//   address: {
//       city: "balkumari"
//   }
// }));
