'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the [\app\studio\[[...tool]]\page.tsx](cci:7://file:///d:/Next%20Projects/energize/app/studio/%5B%5B...tool%5D%5D/page.tsx:0:0-0:0) route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import { markdownSchema } from 'sanity-plugin-markdown'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structure, // Use the structure function directly
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    markdownSchema()
  ],
})