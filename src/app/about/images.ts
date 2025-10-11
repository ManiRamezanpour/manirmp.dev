import { unstable_cache as cache } from 'next/cache';

const imagesAlts: Array<string> = [
  "First seminar of SITCA association – Nov '24",
  "Typing speed competition – Oct '25",
  "Worldskills competition web technology – Jul '22",
];

export const getAboutImage = cache(
  async () => {
    const index = Math.floor(Math.random() * imagesAlts.length);
    const src = await import(`../../assets/images/about/${index}.jpeg`);
    return {
      src: JSON.parse(JSON.stringify(src)),
      alt: imagesAlts[index],
    };
  },
  ['about-image'],
  { revalidate: 86400 },
);
