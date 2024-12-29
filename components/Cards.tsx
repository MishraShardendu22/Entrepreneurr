import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EyeIcon, ArrowRightIcon, Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Author = {
  id: string;
  name: string;
  image: string;
}

type Post = {
  _createdAt: string;
  views: number;
  author: Author;
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
    <Card className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 border-purple-800/20 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
      <CardHeader className="relative p-0">
        <Link href={`/startup/${_id}`} className="block overflow-hidden rounded-t-lg aspect-video relative">
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <Badge 
          variant="secondary" 
          className="absolute top-4 right-4 bg-purple-900/90 text-purple-100 hover:bg-purple-800"
        >
          <Link href={`/?query=${category?.toLowerCase()}`}>
            {category}
          </Link>
        </Badge>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Link href={`/user/${author.id}`} className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.image} alt={author.name} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-purple-200 hover:text-purple-100">{author.name}</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(_createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <EyeIcon className="h-4 w-4" />
              <span>{views}</span>
            </div>
          </div>
        </div>

        <Link href={`/startup/${_id}`} className="block group">
          <h3 className="text-xl font-semibold mb-2 text-purple-50 group-hover:text-purple-200 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 line-clamp-2">
            {description}
          </p>
        </Link>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          variant="outline" 
          className="w-full bg-purple-900/50 border-purple-700 text-purple-100 hover:bg-purple-800/50 hover:text-purple-50"
        >
          <Link href={`/startup/${_id}`} className="flex items-center justify-center gap-2">
            View Details
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cards;