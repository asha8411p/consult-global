import Image from 'next/image';
import bannerImage from '@/public/images/bannerImage.jpg';

function Banner() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden"> {/* Increased height */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <Image
        src={bannerImage}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="blur-sm" // Apply blur effect
      />
      <div className="absolute inset-0 flex items-center justify-start px-8 z-20">
        <h1 className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out text-4xl font-bold">Contact Us</h1>
      </div>
    </div>
  );
}

export default Banner;
