import React from "react";
import Ping from "./Ping";
import { VIEW_BY_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { unstable_after as after } from "next/server";

const View = async ({ id }: { id: string }) => {
  const view = await client
    .withConfig({ useCdn: false })
    .fetch(VIEW_BY_ID_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: view.views + 1 })
        .commit(),
  );

  if (!view) return 0;

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">{view.views}</span>
      </p>
    </div>
  );
};

export default View;
