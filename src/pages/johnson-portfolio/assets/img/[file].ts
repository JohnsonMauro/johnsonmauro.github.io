import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { APIRoute, GetStaticPaths } from 'astro';
import { LOCALES } from '../../../../domain/i18n/config';

// Link cards shared while the site lived under /johnson-portfolio still point
// their og:image here; serve the current images at the old URLs.
export const getStaticPaths = (() =>
  LOCALES.map((lang) => ({ params: { file: `og-${lang}.png` } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) =>
  new Response(await readFile(path.join(process.cwd(), 'public/assets/img', String(params.file))), {
    headers: { 'Content-Type': 'image/png' },
  });
