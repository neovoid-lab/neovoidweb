import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-4xl font-bold mb-10">Welcome to Game Showcase</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 relative">
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gray-700"></div>
          <div className="flex flex-col items-center px-6">
            <Image src="/images/pemandangan.jpg" alt="Game 1" layout="responsive" width={16} height={9} />
            <p className="mt-4 text-gray-400 text-center">
              Game 1 adalah petualangan luar biasa dengan grafis memukau dan gameplay seru. Klik di bawah untuk detail lebih lanjut!
            </p>
            <Link href="/" className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition">Lihat Detail Game 1</Link>
          </div>
          <div className="flex flex-col items-center px-6">
          <Image src="/images/pemandangan.jpg" alt="Game 2" layout="responsive" width={16} height={9} />
            <p className="mt-4 text-gray-400 text-center">
              Game 2 menawarkan pengalaman multiplayer yang mendebarkan. Bergabunglah dengan teman-temanmu sekarang!
            </p>
            <Link href="/" className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold transition">Lihat Detail Game 2</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
