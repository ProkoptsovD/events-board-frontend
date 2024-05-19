import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Image from "next/image";

export default function Page() {
  return (
    <main className="h-[calc(100vh_-_76.5px)]">
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world’s culture!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Eventify we focus on people being happy, emotions, and cultural growth of each
            person, who attends events through our platform.
          </p>
        </div>
      </section>
      <section className="md:container md:mx-auto px-4 pt-[20px] pb-[20px]">
        <Heading as="h2" className="mb-4 text-center">
          Our Team
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="column">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                src="https://www.w3schools.com/w3images/team1.jpg"
                alt="Jane"
              />
              <div className="p-5">
                <h3 className="text-[20px] font-semibold">Jane Doe</h3>
                <p className="text-sm text-gray-500 mb-4">CEO & Founder</p>
                <Button
                  as="a"
                  variant="secondary"
                  className="text-sm font-medium block w-full rounded-lg"
                  href="mailto:jane@eventify.com"
                >
                  jane@eventify.com
                </Button>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                src="https://www.w3schools.com/w3images/team2.jpg"
                alt="Mike"
              />

              <div className="p-5">
                <h3 className="text-[20px] font-semibold">Mike Ross</h3>
                <p className="text-sm text-gray-500 mb-4">Art Director</p>
                <Button
                  as="a"
                  variant="secondary"
                  className="text-sm font-medium block w-full rounded-lg"
                  href="mailto:mike@eventify.com"
                >
                  mike@eventify.com
                </Button>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                src="https://www.w3schools.com/w3images/team3.jpg"
                alt="John"
              />

              <div className="p-5">
                <h3 className="text-[20px] font-semibold">John Doe</h3>
                <p className="text-sm text-gray-500 mb-4">Designer</p>
                <Button
                  as="a"
                  variant="secondary"
                  className="text-sm font-medium block w-full rounded-lg"
                  href="mailto:john@eventify.com"
                >
                  john@eventify.com
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
