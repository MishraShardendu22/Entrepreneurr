import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EyeIcon } from 'lucide-react';

type author = {
  id: string;
  name: string;
  image: string;
}

type Post = {
  _createdAt: string;
  views: number;
  author: author;
  title: string;
  category: string;
  _id: string;
  image: string;
  description: string;
};

type CardsProps = {
  post: Post;
};

const Cards: React.FC<CardsProps> = ({ post }) => {
  const { _createdAt, views, author, title, category, _id, image, description } = post;

  return (
    <>
      <p>
        {views}
        <EyeIcon />
      </p>
      <p>
        {new Date(_createdAt).toLocaleDateString()}
      </p>
      <p>
        <Link
          href={`/user/${author.id}`}
        >
          {author.name}
        </Link>
        <Link
          href={`/startup/${_id}`}
        >
          {title}
        </Link>
      </p>
      <Link href={`/user/${author.id}`} >
      <Image 
        src={author.image}
        alt={author.name}
        width={50}
        height={50}
      />
      </Link>
      <Link
        href={`/startup/${_id}`}
      >
        {description}
        <Image 
          src={image}
          alt={title}
          width={200}
          height={200}
        />
      </Link>
      <div>
        <Link
          href={`/?query={category?.toLowerCase()}`}
        >
          <p>{category}</p>
        </Link>
      </div>
      <button>
        <Link href={`/startup/${_id}`}>Details</Link>
      </button>
    </>
  );
};

export default Cards;
