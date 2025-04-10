"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleGuestContinue = () => {
    // Using push method with proper path
    router.push("/user/dashboard");
  };

  const handleProfessionalContinue = () => {
    router.push("/captain/dashboard");
  };

  return (
    <div className="h-full w-full">
      {/* logo and the semi circle */}
      <div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 375 812"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 z-0"
        >
          <circle cx="0" cy="0" r="60" fill="#FFCACA" />
        </svg>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 p-2 ">
        <div className="object-cover flex justify-center items-center">
                <Image src="/Icon/logo.png" height={200} width={200} alt=""></Image>
              </div>
        <div className="relative">
          <Image
            src="/Icon/HomePage.png"
            height={550}
            width={550}
            alt=""
            className="bg-cover object-cover"
          />

          <div className="absolute inset-4 flex items-center justify-center mt-32">
            <div className="relative w-full h-32">
              <div
                className="absolute w-full overflow-hidden"
                style={{ transform: "rotate(-10deg)", top: "-5px" }}
              >
                <div className="animate-scrollRight whitespace-nowrap flex">
                  <ScallopedServiceRibbon
                    color="#FB9B9B"
                    services={[
                      "Home",
                      "Cleaning",
                      "Kitchen",
                      "Repair",
                      "Maintenance",
                    ]}
                  />
                  <ScallopedServiceRibbon
                    color="#FB9B9B"
                    services={[
                      "Home",
                      "Cleaning",
                      "Kitchen",
                      "Repair",
                      "Maintenance",
                    ]}
                  />
                </div>
              </div>

              <div
                className="absolute w-full overflow-hidden"
                style={{ transform: "rotate(10deg)", top: "35px" }}
              >
                <div className="animate-scrollLeft whitespace-nowrap flex">
                  <ScallopedServiceRibbon
                    color="#C6EFCE"
                    services={[
                      "Painting",
                      "Cleaning",
                      "Plumbing",
                      "Repair",
                      "Electrical",
                    ]}
                  />
                  <ScallopedServiceRibbon
                    color="#C6EFCE"
                    services={[
                      "Painting",
                      "Cleaning",
                      "Plumbing",
                      "Repair",
                      "Electrical",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-bold">Professional Home Service</h1>
          <h3 className="text-[#535763]">
            Let us provide you with your professional experience!
          </h3>
        </div>

        <div className="flex flex-col gap-6 h-full w-[80%] font-semibold text-lg">
          {/* Using onClick with an inline function to ensure the event is properly captured */}
          <button
            className="bg-lightpurple text-white p-2 rounded-md"
            onClick={() => router.push("/user/dashboard")}
          >
            Continue As User
          </button>
          <button
            className="bg-lightpurple text-white p-2 rounded-md"
            onClick={() => router.push("/captain/dashboard")}
          >
            Continue As Professional
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scrollRight {
          animation: scrollRight 20s linear infinite;
        }

        .animate-scrollLeft {
          animation: scrollLeft 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

interface ScallopedServiceRibbonProps {
  color: string;
  services: string[];
}

const ScallopedServiceRibbon: React.FC<ScallopedServiceRibbonProps> = ({
  color,
  services,
}) => {
  return (
    <div className="flex" style={{ minWidth: "100%" }}>
      {services.map((service, index) => (
        <div
          key={index}
          className="relative mx-3 flex items-center justify-center"
          style={{ height: "40px" }}
        >
          <div
            className="flex items-center justify-center px-8"
            style={{
              backgroundColor: color,
              height: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span className="font-medium text-black whitespace-nowrap">
              {service}
            </span>
          </div>

          <div
            className="absolute left-0 top-0 bottom-0 flex items-center justify-center"
            style={{ transform: "translateX(-50%)" }}
          >
            <div
              className="rounded-full bg-white"
              style={{
                width: "16px",
                height: "16px",
                boxShadow: "0 0 0 4px " + color,
                zIndex: 2,
              }}
            ></div>
          </div>

          <div
            className="absolute right-0 top-0 bottom-0 flex items-center justify-center"
            style={{ transform: "translateX(50%)" }}
          >
            <div
              className="rounded-full bg-white"
              style={{
                width: "16px",
                height: "16px",
                boxShadow: "0 0 0 4px " + color,
                zIndex: 2,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;