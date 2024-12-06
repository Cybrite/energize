import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartUpCardType = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post?: StartUpCardType }) => {
  if (!post) return null;

  const {
    _createdAt,
    views = 0,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup-card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          {author && (
            <Link href={`/user/${author._id}`}>
              <p className="text-16-medium line-clamp-1">{author.name}</p>
            </Link>
          )}
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        {author?.image && (
          <Link href={`/user/${author._id}`}>
            <Image
              src={author.image}
              width={50}
              height={50}
              alt={author.name || "Author"}
              className="rounded-full"
            />
          </Link>
        )}
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc line-clamp-3">{description || "No description available."}</p>
        {image && (
          <Image
            src={image}
            alt={title || "Startup image"}
            height={300}
            width={400}
            className="start-card_img"
          />
        )}
      </Link>


      <div className="flex-between gap-3 mt-5">
        {category && (
          <Link href={`/?query=${category.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
        )}
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
