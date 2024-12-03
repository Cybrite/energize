import React from "react";
import SearchForm from "../../components/SearchForm";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your idea <br /> to the world
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit your Ideas, Vote on Pitches and Get Funding
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
};

export default page;
