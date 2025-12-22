import Image from "next/image";

interface Product {
  title: string;
  image: any;
}

export default function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((item, index) => (
        <div
          key={index}
          className="relative group rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src={item.image}
            alt={item.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-5">
            <h4 className="text-white text-lg font-semibold">{item.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
