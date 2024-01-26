import React from "react";
import Image from "next/image";

function onboarding() {
  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <Image src="/whatsapp.gif" alt="Whatsapp" height={250} width={250} />
        <span className="text-6xl">Whatsapp</span>
      </div>
        <h2 className="text-2xl">Create your Profile</h2>
    </div>
  );
}

export default onboarding;
