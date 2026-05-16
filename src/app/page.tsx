import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#1B1B1B] flex justify-center py-20 ">
      <main className=" h-225">
        <div className="flex flex-col mx-auto">
          <h1 className="text-center mt-5 text-4xl text-white/80">
            Web Notes
          </h1>
          <Link
            href={"/register"}
            className="text-center mt-20 mx-auto px-4 py-2 rounded-md font-medium bg-blue-600 text-white cursor-pointer w-40"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}
