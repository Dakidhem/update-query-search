import Image from "next/image";
import Link from "next/link";

const colorVariants = ["black", "white", "blue"];
const sizeVariants = ["xs", "s", "md", "l", "xl"];

export default function Home({ searchParams }) {
  const currentColor = searchParams.color || "black";
  const currentSize = searchParams.size || "md";

  const imageUrls = {
    black:
      "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75",
    white:
      "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=1920&q=75",
    blue: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=1920&q=75",
  };

  return (
    <main className="flex justify-center items-center">
      <div className="bg-white w-[100%] py-8 px-8 flex justify-between items-center rounded-lg">
        <div>
          <Image
            src={imageUrls[currentColor]}
            alt="Shirt variants"
            width={600}
            height={550}
          />
        </div>
        <section className="flex-1 gap-y-50">
          <div className="flex gap-x-4">
            <h1 className="text-4xl text-blue-800 font-bold">T-shirt</h1>
            <div className="text-white bg-blue-600 inline-block py-2 px-4 rounded-xl">
              2000 DA
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-xl">COLORS</h2>
            <div className="flex gap-3">
              {colorVariants.map((color, index) => (
                <Link
                  href={`?${new URLSearchParams({
                    color: color,
                    size: currentSize,
                  })}`}
                  className={`bg-slate-200 py-2 px-4 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer ${
                    currentColor === color && "bg-blue-600 text-white"
                  }`}
                  key={index}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-xl">SIZES</h2>
            <div className="flex gap-3">
              {sizeVariants.map((size, index) => (
                <Link
                  href={`?${new URLSearchParams({
                    color: currentColor,
                    size: size,
                  })}`}
                  className={`bg-slate-200 py-2 px-4 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer ${
                    currentSize === size && "bg-blue-600 text-white"
                  }`}
                  key={index}
                >
                  {size.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
