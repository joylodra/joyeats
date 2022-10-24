import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'lbtexas6',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
});

// sanity cors add http://localhost:3000 to whitelist
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;
