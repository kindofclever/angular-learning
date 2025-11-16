import { SanityCodegenConfig } from '@sanity/codegen';

const config: SanityCodegenConfig = {
  schemaPath: './sanity/schemas/index.ts',
  outputPath: './src/app/types/sanity-schema.types.ts',

  // Generiere TypeScript-Typen aus den Schemas
  generates: {
    './src/app/types/sanity-schema.types.ts': {
      schema: './sanity/schemas/index.ts',
    },
  },
};

export default config;
