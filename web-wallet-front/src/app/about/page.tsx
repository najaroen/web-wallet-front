import Image from "next/image";
import logo from "../../public/assets/icons/logo.png";
import bg from "../../public/assets/images/bg13-1.svg";
import cover1 from "../../public/assets/images/meet.jpg";
import plan2 from "../../public/assets/images/plan2.jpg";
import rocket from "../../public/assets/images/rocket.svg";
import card from "../../public/assets/images/card.svg";
import coin from "../../public/assets/images/coins.svg";

export default function About() {
  return (
    <div className="flex flex-col gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-whitebg">
      <div className="self-center">
        <Image
          className=""
          src={logo}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
      <div className="self-center">
        <Image
          className=""
          src={bg}
          alt="bg"
          width="300"
          height={100}
          priority
        />
      </div>
      <div className="">
        <p className="text-2xl font-semibold text-center">Here you SASOM</p>
        <p className="text-base text-neutral-500 text-center">
          Celo is scaling Ethereum with real-world solutions
        </p>
      </div>
      <div className="self-center">
        <button className="rounded-md w-36 text-white p-2 text-base font-semibold text-center  bg-primaryblue">
          Contact us.
        </button>
      </div>
      <div className="bg-creambg max-w-full p-8">
        <div className="self-start">
          <Image
            className="rounded-xl"
            src={cover1}
            alt="bg"
            width="300"
            height={100}
            priority
          />
          <p className="font-medium text-xl text-gray-800 mt-2">Who we are</p>
          <p className="text-gray-400">
          Craft your campaign in the digital world through blockchain Craft your campaign in the digital world through blockchain
          </p>
        </div>
        <div className="mt-10 flex justify-end">
          <Image
            className="rounded-xl"
            src={plan2}
            alt="bg"
            width="300"
            height={100}
            priority
          />
        </div>
        <div>
          <p className="font-medium text-xl text-gray-800 mt-2">Why SASOM</p>
          <p className="text-gray-400">
          products describe your company products describe your company products describe your company
          </p>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="self-center">
        <p className="text-gray-800 text-2xl font-semibold">How it works?</p>
      </div>
      <div className="flex flex-col">
        <div className="self-center">
          <Image
            className=""
            src={rocket}
            alt="Next.js logo"
            width={90}
            height={38}
            priority
          />
        </div>
        <p className="px-12 text-center text-gray-400 font-medium">
          Craft your campaign in the digital world through blockchain
        </p>
      </div>
      <div className="flex flex-col">
        <div className="self-center">
          <Image
            className=""
            src={card}
            alt="Next.js logo"
            width={80}
            height={38}
            priority
          />
        </div>
        <p className="px-12 text-center text-gray-400 font-medium">
          Craft your campaign in the digital world through blockchain
        </p>
      </div>
      <div className="flex flex-col">
        <div className="self-center">
          <Image
            className=""
            src={coin}
            alt="Next.js logo"
            width={90}
            height={38}
            priority
          />
        </div>
        <p className="px-12 text-center text-gray-400 font-medium">
          Craft your campaign in the digital world through blockchain
        </p>
      </div>
      <div className="w-screen h-56 mt-4 z-0">
        <div className="h-full max-h-56 bg-primaryblue rounded-t-max">
          <div className="flex flex-col">
            <Image
              className="self-center mt-4"
              src={logo}
              alt="Next.js logo"
              width={90}
              height={38}
              priority
            />
          </div>
          <div>
            <p className="text-gray-400 text-sm text-center text-white pl-4">
              Blockchain Points: A New Era of Loyalty Rewards Blockchain
              technology is disrupting the loyalty rewards industry. Blockchain
              points offer enhanced security, transparency, and
              interoperability
            </p>
          </div>
          <div className="flex flex-row mt-8">
              <p className="text-gray-300 font-medium">
                SASOM by 
              </p>
              <p className="text-gray-300 font-medium"> Merit</p>
          </div>
        </div>
      </div>
      {/* <Image className="z-0" src={footerbg} alt="Next.js logo" priority />
      <Image className="z-10" src={footerbg} alt="Next.js logo" priority /> */}
    </div>
  );
}
