function getAvatar(user) {
  return user?.profile?.avatar?.url ?? 
                'No Avatar';
}
console.log(
    getAvatar({
  profile: { avatar: { url: "https://dummyjson.com" } }
}))

console.log(
  getAvatar({ profile: {} })
)