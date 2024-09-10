import Image from "next/image";
import avatar from "../../public/assets/icons/avatar.svg";
import copy from "../../public/assets/icons/copy.svg";
import bell from "@/public/assets/icons/bell.svg";
import logo from "@/public/assets/icons/logo.png";

export default function Wallet() {
  return (
    <div
      className="flex flex-col h-screen gap-10 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundColor: "#e9e3e3",
      }}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <div className="rounded-rd32 size-16 bg-primaryblue">
            <Image
              className="content-center"
              src={avatar}
              alt="Next.js logo"
              width={100}
              height={40}
              priority
            />
          </div>
          <div className="content-center text-wrap max-w-20">
            <p className="truncate">
              0x4F32a29b0BF9801b6BCb776a13196Ac1B083c7Bb
            </p>
          </div>
          <div className="content-center max-w-16">
            <button>
              <Image
                className="content-center"
                src={copy}
                alt="Next.js logo"
                width={25}
                height={25}
                priority
              />
            </button>
          </div>
        </div>
        <div className="rounded-full size-16 flex flex-row justify-end">
          <Image
            className=""
            src={bell}
            alt="notification"
            width={20}
            height={20}
            priority
          />
        </div>
      </div>
      <div className="p-0 bg-white min-w-60 h-48 rounded-rd20 flex flex-col justify-between p-4">
        <div className="z-10 flex flex-row">
          <p className="text-base font-medium text-graytxt">Point Card</p>
          <div className="self-center" style={{position: 'absolute', right:15, top:135}}>
            <Image
              className=""
              src={logo}
              alt="Next.js logo"
              width={130}
              height={60}
              priority
            />
          </div>
        </div>
        <div className="z-10">
          <p className="font-normal text-3xl">1,200</p>
        </div>
        <div className="z-10">
          <p className="text-base font-medium text-graytxt">Micky Taylor</p>
        </div>
        {/* <Image
          className=""
          src={pointCard}
          alt="notification"
          width={402}
          height={620}
          priority
        />
         <Image
          className=""
          src={pointCard}
          alt="notification"
          width={402}
          height={620}
          priority
        />
         <Image
          className=""
          src={pointCard}
          alt="notification"
          width={402}
          height={620}
          priority
        />  */}
      </div>
    </div>
  );
}
