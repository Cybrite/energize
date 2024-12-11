"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const StartUpForm = () => {
  const [error, setError] = useState<Record<string, string>>({});

  return (
    <form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_textarea"
          required
          placeholder="Startup Title"
        />

        {error.title && <p className="startup-form_error">{error.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_input"
          required
          placeholder="Your description"
        />

        {error.description && (
          <p className="startup-form_error">{error.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Category (Tech,Health,Education etc..)"
        />

        {error.category && (
          <p className="startup-form_error">{error.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image url
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Start-up Image URL"
        />

        {error.link && <p className="startup-form_error">{error.link}</p>}
      </div>
    </form>
  );
};

export default StartUpForm;
