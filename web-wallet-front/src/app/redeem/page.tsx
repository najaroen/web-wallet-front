"use client";
import Image from "next/image";
import Popup from "reactjs-popup";
import { Scanner } from "@yudiel/react-qr-scanner";
import scan from "@/public/assets/icons/90337376516257455273620.svg";
import { useState } from "react";
import React from "react";
export default function Redeeming() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

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
      <div>
        <Popup
          open={open}
          closeOnDocumentClick
          onClose={closeModal}
          position={"bottom center"}
        >
          <div className="modal" style={{ height: "450px" }}>
            <Scanner
              onScan={(result) => {
                console.log(result);
              }}
            />
          </div>
        </Popup>
      </div>
      {!open ? (
        <div className="self-center">
          <div
            onClick={() => setOpen((o) => !o)}
            className="w-72 h-64 bg-white rounded-rd16 shadow-lg pt-16"
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
      ) : null}
      <div className="px-4 text-sm text-center">
        <p>Redeem your point by X</p>
        <p>Contact us at: Sasompoint@sasom.com</p>
      </div>
    </div>
  );
}
