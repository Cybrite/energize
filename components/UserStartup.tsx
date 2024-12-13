import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import StartupCard, { StartUpCardType } from "./StartupCard";

const UserStartup = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup) => (
          <StartupCard key={startup._id} post={startup as StartUpCardType} />
        ))
      ) : (
        <p className="no-result">No startups found</p>
      )}
    </>
  );
};

export default UserStartup;
