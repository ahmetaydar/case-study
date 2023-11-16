"use client";
import { EyeClose } from "@/components/Svgs/EyeClose";
import { EyeOpen } from "@/components/Svgs/EyeOpen";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useUser } from "@/context/UserContext";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const router = useRouter();
  const { setEmail } = useUser();

  const existingEmail = "ahmet@trendify.com";

  type LoginInputType = {
    email: string;
    password: string;
    repassword: string;
    isAccept: boolean;
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  function onSubmit({ email, password, isAccept }: LoginInputType) {
    if (email === existingEmail) {
      console.log("email already exists" + email + password + isAccept);
      toast.error("This e-mail address is already registered", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: { fontSize: "18px" },
      });

      reset();
    } else {
      console.log(
        "email:",
        email,
        "password:",
        password,
        "isAccept:",
        isAccept
      );
      setEmail(email);
      reset();
      router.push("/auth/verify");
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePasswordVisibility2 = () => {
    setPasswordShown2(!passwordShown2);
  };

  const validatePasswords = (value: string) => {
    const password = watch("password");
    return password === value || "Passwords didn't match, please check again.";
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isValid, isLoading },
  } = useForm<LoginInputType>({ mode: "onChange" });

  return (
    <div className=" flex grid-cols-2 h-[1080px]  ">
      <div className="w-1/2 m-12 ">
        <div className="ml-[27px] relative mt-[23px] mr-[43px]  bg-white  border rounded-lg shadow-sm ">
          <Image
            src="/logo.svg"
            alt="logo"
            width={146}
            height={187}
            className="flex items-center justify-center  items-left absolute top-[-2rem] left-[-2rem]"
          />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pl-[152px]  pt-[152px] pr-[180px] h-[961px] bg-white container "
          >
            <h1 className="text-primarydark font-bold text-[40px] mb-[54px]">
              Create an account
            </h1>
            <div className="mb-8">
              <label
                htmlFor="email"
                className="text-primarydark text-base font-semibold mb-2 "
              >
                Business Email Address
              </label>
              <input
                className={`h-14 w-full  mt-2  appearance-none rounded-lg border-borderGrey border px-3 py-2 
                leading-tight text-gray-700 focus:outline-none ${
                  errors.email && "border-formError"
                } `}
                id="email"
                type="email"
                aria-label="Email"
                required
                autoComplete="email"
                autoFocus
                {...register("email", {
                  required: true,
                  pattern: emailRegex,
                })}
              />
              {errors.email && (
                <p className="text-formError absolute text-sm font-normal mt-2">
                  Please enter a valid business e-mail address
                </p>
              )}
            </div>

            <div className="  mb-8">
              <label
                htmlFor="password"
                className="text-primarydark text-base font-semibold"
              >
                Password
              </label>
              <div className="flex">
                <input
                  className={`h-14 w-full  mt-2  appearance-none rounded-lg border-borderGrey border px-3 py-2 leading-tight text-gray-700 focus:outline-none ${
                    errors.password && "border-formError"
                  }`}
                  id="password"
                  type={passwordShown ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  {...register("password", {
                    required: true,
                    pattern: passwordRegex,
                  })}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="flex justify-around items-center  "
                >
                  {passwordShown ? <EyeOpen /> : <EyeClose />}
                </span>
              </div>
              {errors.password && (
                <span className="text-formError text-sm font-normal mt-2 ">
                  Your password must be at least 8 characters long and contain
                  uppercase, lowercase, and a number.
                </span>
              )}
            </div>
            <div className="  mb-6">
              <label
                htmlFor="repassword"
                className="text-primarydarkpurple1 text-base font-semibold"
              >
                Re-Enter Your Password
              </label>
              <div className="flex">
                <input
                  className={`h-14 w-full  mt-2  appearance-none rounded-lg border-borderGrey border px-3 py-2 leading-tight text-gray-700 focus:outline-none ${
                    errors.repassword && "border-formError"
                  }`}
                  id="repassword"
                  type={passwordShown2 ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  {...register("repassword", {
                    required: true,
                    validate: validatePasswords,
                  })}
                />
                <span
                  onClick={togglePasswordVisibility2}
                  className="flex justify-around items-center "
                >
                  {passwordShown2 ? <EyeOpen /> : <EyeClose />}
                </span>
              </div>
              {errors.repassword && (
                <span className="text-formError text-sm font-normal mt-2 ">
                  {errors.repassword.message}
                </span>
              )}
            </div>
            <div className="mb-[54px]">
              <input
                type="checkbox"
                id="isAccept"
                required
                {...register("isAccept", { required: true })}
              />
              <label
                htmlFor="checkbox"
                className="ml-[10px] text-base font-normal"
              >
                I accept{" "}
                <Link href="/termspolicy">
                  <span className="italic underline underline-offset-1 text-base font-bold">
                    Terms of Service & Privacy Policy
                  </span>
                </Link>
              </label>
              {errors.isAccept && (
                <p className="text-formError text-sm font-normal mt-2 ">
                  {" "}
                  Please read and accept the Terms of Service & Privacy Policy
                  to sign up the system.
                </p>
              )}
            </div>
            <div className="flex items-center ">
              <button
                className={` w-full h-[60px] rounded-lg ${
                  !isValid || isSubmitSuccessful
                    ? "bg-primarypurpledisabled cursor-not-allowed"
                    : "bg-primarypurple1 hover:bg-darkpurple"
                } px-4 py-2 font-bold text-white focus:outline-none`}
                type="submit"
                disabled={!isValid}
              >
                Sign Up
              </button>
            </div>
            <div>
              <p className="text-center text-base font-normal mt-8">
                Already have an account?{" "}
                <Link href="/auth/login">
                  <span className="italic underline underline-offset-1 text-base font-bold">
                    Click Here To Login
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center">
          <Image
            src="/brandlogo.svg"
            alt="logo"
            height={74}
            width={244}
            className="mx-auto"
          />
          <h1 className="text-white font-semibold text-4xl mt-[30px]">
            Empowering Growth <br /> No Code Required!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
