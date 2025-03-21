import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="flex relative pl-4 pr-[25vw] h-dvh">
        <Image
          className="absolute object-fit inset-0 -z-10 size-full object-cover object-center brightness-50"
          src="/chicago_bg.jpg"
          alt="Chicago"
          width={400}
          height={225}
        />

        <div className="my-auto p-2">
          <h1 className="font-bold text-xl mb-2">Wikrama W. Wardhana</h1>

          <span>
            BSc Computer Science <br />
            <i>Illinois Institute of Technology</i>
          </span>
        </div>
      </header>

      <section className="p-8 flex flex-col">
        <h2 className="font-bold text-xl mb-4 hyphens-auto w-fit underline underline-offset-10 decoration-raspberry">
          About me
        </h2>

        <p className="mb-4">
          Currently a Bachelor&apos;s student in Computer Science with solid
          foundation in programming and the ability to quickly learn. Undergoing
          specialization towards distributed and cloud computing. Eager to apply
          technical knowledge to real-world challenges and contribute to
          innovative solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Image
            className="object-cover object-center flex-none"
            src="/portrait.jpg"
            alt="Profile picture"
            width={192}
            height={266}
          />

          <span className="flex-1">
            <h3 className="text-lg mb-4 xs:underline xs:underline-offset-10 xs:decoration-raspberry">
              Computer Scientist, <br className="xs:hidden" />
              <span className="underline underline-offset-10 decoration-raspberry">
                4<span className="align-super text-xs">th</span> Year
              </span>
            </h3>

            <ul className="md:grid md:grid-cols-2 list-disc list-outside gap-x-2 mb-2 ms-4">
              <li>
                <span className="font-bold">Degree: </span>Bachelor&apos;s
              </li>
              <li>
                <span className="font-bold">Phone: </span>+1 872-265-6893
              </li>
              <li>
                <span className="font-bold">Nationality: </span>Indonesian
              </li>
              <li>
                <span className="font-bold">City: </span>Chicago, USA
              </li>
              <li>
                <span className="font-bold">Email: </span>
                <a
                  className="underline decoration-raspberry hover:text-raspberry hover:transition-colors delay-150 duration-300 ease-in-out"
                  href="mailto:yddet.www@gmail.com"
                >
                  yddet.www@gmail.com
                </a>
              </li>
              <li>
                <span className="font-bold">GitHub: </span>
                <a
                  href="https://github.com/yddet-www"
                  className="underline decoration-raspberry hover:text-raspberry hover:transition-colors delay-150 duration-300 ease-in-out"
                >
                  github.com/yddet-www
                </a>
              </li>
            </ul>

            <h3 className="text-lg mb-4 underline underline-offset-10 decoration-raspberry">
              Coursework
            </h3>

            <ul className="xs:grid xs:grid-cols-2 list-disc list-outside gap-x-6 mb-2 ms-4">
              <li>Intro to Algorithms</li>
              <li>Operating Systems</li>
              <li>Distributed Computing</li>
              <li>Database Organization</li>
              <li>Intro to Machine Learning</li>
              <li>Intro to A.I.</li>
              <li>Linear Optimization</li>
              <li>Economics of Capital Investments</li>
            </ul>
          </span>
        </div>
      </section>

      <section className="px-8 pb-8">
        <h2 className="font-bold text-xl mb-6 hyphens-auto w-fit underline underline-offset-10 decoration-raspberry">
          Experiences
        </h2>

        <div className="resume-item before:corner-style">
          <h3 className="font-bold text-lg">
            Student Collaborator &ndash; Remote Telescope
          </h3>
          <p className="font-mono">August 2024 &ndash; December 2024</p>
          <p className="italic text-sm mb-2">
            Illinois Institute of Technology, IBM
          </p>

          <ul className="list-disc list-outside ms-4 text-sm hyphens-auto">
            <li>
              Researched and performed astronomical image processing practices
              in Python
            </li>
            <li>
              Overhauled legacy Java code into Python whilst maintaining equal
              performance
            </li>
            <li>
              Coordinated and cooperated in weekly discussions between IBM and
              IIT regarding project goals
            </li>
            <li>
              Engineered high-performance data processing and image analysis
              pipelines using Astropy, SciPy, and OpenCV to maintain low runtime
            </li>
          </ul>
        </div>

        <div className="resume-item before:corner-style">
          <h3 className="font-bold text-lg">Supplemental Instructor</h3>
          <p className="font-mono">August 2024 &ndash; Present</p>
          <p className="italic text-sm mb-2">
            Illinois Institute of Technology, Academic Resource Center
          </p>

          <ul className="list-disc list-outside ms-4 text-sm hyphens-auto">
            <li>
              Oversee the tutoring for undergraduate students in the class
              CS-331 (Data Structures & Algorithm)
            </li>
            <li>
              Conduct open review sessions, adapting teaching methods to meet
              diverse learning needs of 30+ students
            </li>
            <li>
              Facilitate open table sessions for students needing help in level
              400+ CS courses
            </li>
          </ul>
        </div>
      </section>

      <section className="px-8 pb-8">
        <h2 className="font-bold text-xl mb-6 hyphens-auto w-fit underline underline-offset-10 decoration-raspberry">
          Projects
        </h2>
      </section>
    </main>
  );
}
