import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import React, { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import markdownit from "markdown-it";
import View from "@/components/View";

const md = markdownit();

export const experimental_ppr = true;
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");

  const imageProps = {
    src: post.image,
    width: 1000,
    height: 1000,
    alt: post.title,
  };

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag"> {formatDate(post?._createdAt)} </p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        <Image {...imageProps} className="w-full h-auto rounded-xl" />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex items-center gap-2 mb-3"
            >
              <Image
                src={post.author?.image}
                width={64}
                height={64}
                alt={post.author?.name}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium">{post.author?.name}</p>
                <p className="text-16-medium">@{post.author?.username}</p>
              </div>
            </Link>

            <p className="category-tag">{post.category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>
          {parsedContent ? (
            <article
              dangerouslySetInnerHTML={{ __html: parsedContent }}
              className="prose max-w-4xl font-work-sans break-all "
            />
          ) : (
            <p className="no-result">No results...</p>
          )}
        </div>

        <hr className="divider" />

        {/* TODO: Editor's selected Startup */}
        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;