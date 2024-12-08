/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type Startup = {
  _id: string;
  _type: "startup";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  views?: number;
  description?: string;
  category?: string;
  image?: string;
  pitch?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  image?: string;
  bio?: string;
};

export type Markdown = string;

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | SanityAssetSourceData | Startup | Slug | Author | Markdown;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/queries.ts
// Variable: STARTUPS_QUERY
// Query: *[_type == 'startup' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {  _id,  _createdAt,  title,  pitch,  image,  views,  description,  category,  author -> {    _id,    name,    image,    bio  }}
export type STARTUPS_QUERYResult = Array<{
  _id: string;
  _createdAt: string;
  title: null;
  pitch: null;
  image: string | null;
  views: null;
  description: null;
  category: null;
  author: null;
} | {
  _id: string;
  _createdAt: string;
  title: string | null;
  pitch: null;
  image: null;
  views: null;
  description: string | null;
  category: null;
  author: null;
} | {
  _id: string;
  _createdAt: string;
  title: string | null;
  pitch: string | null;
  image: string | null;
  views: number | null;
  description: string | null;
  category: string | null;
  author: {
    _id: string;
    name: string | null;
    image: string | null;
    bio: string | null;
  } | null;
}>;
// Variable: STARTUP_BY_ID_QUERY
// Query: *[_type == 'startup' && _id == $id][0]{  _id,  _createdAt,  title,  slug,  pitch,  image,  views,  description,  category,  author -> {    _id,    name,    image,    username,    bio  }}
export type STARTUP_BY_ID_QUERYResult = {
  _id: string;
  _createdAt: string;
  title: string | null;
  slug: Slug | null;
  pitch: string | null;
  image: string | null;
  views: number | null;
  description: string | null;
  category: string | null;
  author: {
    _id: string;
    name: string | null;
    image: string | null;
    username: string | null;
    bio: string | null;
  } | null;
} | null;
// Variable: VIEW_BY_ID_QUERY
// Query: *[_type == 'startup' && _id == $id][0]{  _id,  views,}
export type VIEW_BY_ID_QUERYResult = {
  _id: string;
  views: number | null;
} | null;
// Variable: AUTHOR_BY_GITHUB_ID_QUERY
// Query: *[_type == "author" && id == $id][0]{     _id,     id,     name,     username,     email,     image,     bio  }
export type AUTHOR_BY_GITHUB_ID_QUERYResult = {
  _id: string;
  id: number | null;
  name: string | null;
  username: string | null;
  email: string | null;
  image: string | null;
  bio: string | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == 'startup' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {\n  _id,\n  _createdAt,\n  title,\n  pitch,\n  image,\n  views,\n  description,\n  category,\n  author -> {\n    _id,\n    name,\n    image,\n    bio\n  }\n}": STARTUPS_QUERYResult;
    "\n  *[_type == 'startup' && _id == $id][0]{\n  _id,\n  _createdAt,\n  title,\n  slug,\n  pitch,\n  image,\n  views,\n  description,\n  category,\n  author -> {\n    _id,\n    name,\n    image,\n    username,\n    bio\n  }\n}": STARTUP_BY_ID_QUERYResult;
    "\n  *[_type == 'startup' && _id == $id][0]{\n  _id,\n  views,\n}": VIEW_BY_ID_QUERYResult;
    "\n  *[_type == \"author\" && id == $id][0]{\n     _id,\n     id,\n     name,\n     username,\n     email,\n     image,\n     bio\n  }\n  ": AUTHOR_BY_GITHUB_ID_QUERYResult;
  }
}
