import Image from 'next/image';

const page = async ({ params }: { params: { movie: any } }) => {
  const { movie } = params;

  const imagePath = 'https://image.tmdb.org/t/p/original';
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log('hello', res);
  return (
    <div>
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py">
          {res.status}
        </h2>
        <Image
          className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          alt="Image "
          priority
        />
        <p>{res.overview}</p>
      </div>
    </div>
  );
};

export default page;
