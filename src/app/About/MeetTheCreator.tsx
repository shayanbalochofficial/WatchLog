import Image from "next/image";
import Link from "next/link";
export default function MeetTheCreator() {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="relative">
          <div className="rounded-full mx-auto">
            <Image
              src="/profile.jpg"
              alt="Muhammad Shayan"
              width="500"
              height="300"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Meet the <span className="text-[#8a7968] underline">creator</span>
          </h2>
          <p className="text-lg mb-4">
            Hi, I’m <span className="text-[#8a7968] font-semibold">Shayan</span>,
            a passionate developer and tech enthusiast currently pursuing my A
            levels at Cedar College.
          </p>

          <p className="text-lg mb-4">
            So far, I’ve learned TypeScript and Next.js, and I’m constantly
            exploring new technologies to improve my coding expertise. I created{" "}
            <span className="text-[#8a7968] font-semibold">Watchlog</span> to
            share my knowledge and help fellow learners with coding tutorials,
            focusing on practical examples and easy-to-understand explanations.
          </p>
          <p className="text-lg mb-4">
            My goal is to simplify complex programming concepts and make them
            accessible to everyone, whether you’re just starting or looking to
            expand your skills.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <Link
              href="https://linkedin.com/in/shayanbaloch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-[#8a7968] transition duration-300"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/shayanbalochofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-[#8a7968] transition duration-300"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



