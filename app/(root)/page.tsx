import React from "react";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "John Doe",
        email: "1iX2C@example.com",
      },
      _id: 1,
      description: "this is a startup",
      category: "Robots",
      title: "we are robots",
      image:
        "data:image/png;base64,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",
    },
  ];

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
