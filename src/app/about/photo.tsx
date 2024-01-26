import personal from '@/assets/images/about/manirmp.jpg';
import { Img } from '@/components/atoms/img';
import cx from '@/utils/cx';

export default async function Photo() {
  return (
    <figure className={'mt-3'}>
      <div
        className={cx(
          'aspect-[21/9]',
          'tablet-md:rounded-4',
          'overflow-hidden',
          '-mx-3 tablet-md:-mx-4',
        )}
      >
        <Img
          src={personal}
          alt={'coding ...'}
          quality={100}
          placeholder={'blur'}
          className={'h-full'}
          priority
        />
      </div>
      <figcaption>coding ...</figcaption>
    </figure>
  );
}
