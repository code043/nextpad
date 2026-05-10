import Navbar from "@/components/navbar";
import Register from "@/components/register";

export default function Home() {
  return (
    <div className="bg-[#1B1B1B]">
      <Navbar />
      <main className=" h-225">
        <h1 className="text-white/80">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
          corporis. Provident nemo nostrum atque molestiae, aut eveniet ut alias
          labore sunt voluptas placeat odio! Non minima earum facere officiis
          natus.
          <div className="flex justify-center">
            <Register />
          </div>
        </h1>
      </main>
    </div>
  );
}
