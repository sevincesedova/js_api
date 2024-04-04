
fetch(
    'https://api.themoviedb.org/3/movie/popular?&api_key=4b135fd2f2f824773c0aba25295314c7'
).then((res)=>res.json().then((data)=>{
  let list=data.results.map((x)=>console.log(`Filmin adi:${x.title}`))
  
}))


