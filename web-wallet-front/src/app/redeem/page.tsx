import Image from "next/image";
import scan from "@/public/assets/icons/90337376516257455273620.svg";
export default function Redeeming() {
  return (
    <div
      className="flex flex-col justify-between h-screen gap-10 p-0 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="pt-10">
        <p className="text-center text-2xl font-semibold">Scan to redeem</p>
        <p className="text-center">SASOM Point</p>
      </div>
      <div className="self-center">
        <div
          className="w-72 h-64 bg-white rounded-rd16 content-center shadow-lg"
          style={{ borderRadius: "16px" }}
        >
          <Image
            style={{ marginLeft: "33%" }}
            className=""
            src={scan}
            alt="Next.js logo"
            width={100}
            height={40}
            priority
          />
          <p style={{ marginLeft: "40%" }} className="text-2xl font-bold">
            scan
          </p>
        </div>
      </div>
      <div className="px-4 text-sm text-center">
        <p>Redeem your point by X</p>
        <p>Contact us at: Sasompoint@sasom.com</p>
      </div>
    </div>
  );
}
