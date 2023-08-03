export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main>
      <h1 className="text-3xl font-bold underline bg-yellow-500">
        Hello next 13 🔥
      </h1>
      {res.results.map((movie: any) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
        </div>
      ))}
    </main>
  );
}
