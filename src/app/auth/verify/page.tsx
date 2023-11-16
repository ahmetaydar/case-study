"use client";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Verify = () => {
  const router = useRouter();
  const [resend, setResend] = React.useState(false);
  const { email } = useUser();
  console.log(email);

  const sendMail = (e: any) => {
    e.preventDefault();
    const email = "support@prowth.co";
    const subject = encodeURIComponent(
      "I need support on my email verification"
    );
    const mailtoLink = `mailto:${email}?subject=${subject}`;

    window.location.href = mailtoLink;
    console.log("mail sent");
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen ">
      <div className="">
        <Image
          src="/brandlogo.svg"
          alt="logo"
          height={74}
          width={244}
          className="mx-auto mb-[65px]"
        />
      </div>
      <div className="w-[658px]  py-12 px-[113px] h-full relative bg-white border-[3px] rounded-2xl flex  flex-col justify-start items-center ">
        <Image
          src="/logo.svg"
          alt="logo"
          width={146}
          height={187}
          className="flex items-center  items-left absolute top-[-2rem] left-[-2rem]"
        />
        <Image
          src="/mailorange.svg"
          alt="logo"
          width={146}
          height={187}
          className=""
        />
        <h1 className=" text-[#FE884C] text-2xl font-bold">
          Please verify your email address
        </h1>
        {!resend ? (
          <p className="text-xl text-center font-normal text-darkpurple flex items-center justify-center">
            You’ve signed up with {email}. Please check your inbox to verify
            your email address.
          </p>
        ) : (
          <>
            <p className="text-xl text-center font-normal text-darkpurple flex items-center justify-center">
              We’ve resent a verification email to {email}. Please check your
              mailbox to verify your email address.
            </p>
            <p className="text-xl text-center font-normal text-darkpurple flex items-center justify-center">
              If you are still having a problem reach out to our support team.
            </p>
          </>
        )}

        <div className="flex  grid-cols-2 mt-12 w-full items-center   ">
          {!resend ? (
            <button
              onClick={() => setResend(!resend)}
              className="bg-white text-darkpurple rounded-lg border-purpleStroke px-4 py-2 mt-4 w-1/2 shadow-xs border-[3px] focus:outline-none "
            >
              Resend{" "}
            </button>
          ) : (
            <button
              onClick={(e) => sendMail(e)}
              className="bg-white text-darkpurple rounded-lg border-purpleStroke px-4 py-2 mt-4 w-1/2 shadow-xs border-[3px] focus:outline-none "
            >
              Contact Support
            </button>
          )}

          <button
            className="bg-darkpurple text-white rounded-lg px-4 py-2 mt-4 ml-4 w-1/2 shadow-xs border-2 focus:outline-none"
            onClick={() => router.push("/auth/login")}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
