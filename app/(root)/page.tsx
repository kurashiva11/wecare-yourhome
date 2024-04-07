import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
       {/*  HERO SECTION */}
       <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">

          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold"> We Care Your Home</h1>
            <p className="p-regular-20 md:p-regular-24">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. natus quod eaque doloremque ducimus quisquam asperiores?
            </p>

            <Button size="lg" asChild className="button w-full sm:w-fit text-white" >
              <Link href="#products"> Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/hero-1.png" 
            alt={"hero-page"}
            width={1100}
            height={1100}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />

        </div>
       </section>

      # Testinomals
    </>
  );
}
