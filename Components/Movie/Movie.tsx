import Image from 'next/image';
import Link from 'next/link';

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const Movie: React.FC<MovieProps> = ({
  id,
  title,
  poster_path,
  release_date,
}) => {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          width={800}
          height={700}
          src={imagePath + poster_path}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default Movie;
