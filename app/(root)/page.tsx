import React from "react";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);


  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your idea <br /> To The World
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit your Ideas, Vote on Pitches and Get Funding
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartUpCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default page;
