import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == 'startup' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  pitch,
  image,
  views,
  description,
  category,
  author -> {
    _id,
    name,
    image,
    bio
  }
}`);

export const STARTUP_BY_ID_QUERY = defineQuery(`
  *[_type == 'startup' && _id == $id][0]{
  _id,
  _createdAt,
  title,
  slug,
  pitch,
  image,
  views,
  description,
  category,
  author -> {
    _id,
    name,
    image,
    username,
    bio
  }
}`);

export const VIEW_BY_ID_QUERY = defineQuery(`
  *[_type == 'startup' && _id == $id][0]{
  _id,
  views,
}`);
