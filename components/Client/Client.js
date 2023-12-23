import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import Image from "next/image";

export const Client = () => {
    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="   p-12 sm:p-4 flex justify-center items-center">
                    <Image
                        src="/client5.svg"
                        width={1024}
                        height={680}
                        alt="Page Banner"
                        objectFit="cover"
                        className="mx-auto"
                    />{" "}
                </div>
                <div className="   p-12 sm:p-4 flex justify-center items-center">
                    <Image
                        src="/client6.svg"
                        width={1024}
                        height={680}
                        alt="Page Banner"
                        objectFit="cover"
                        className="mx-auto"
                    />{" "}
                </div>
                <div className="   p-12 sm:p-4 flex justify-center items-center">
                    <Image
                        src="/client7.svg"
                        width={1024}
                        height={680}
                        alt="Page Banner"
                        objectFit="cover"
                        className="mx-auto"
                    />{" "}
                </div>
                <div className="   p-12 sm:p-4 flex justify-center items-center">
                    <Image
                        src="/client8.svg"
                        width={1024}
                        height={680}
                        alt="Page Banner"
                        objectFit="cover"
                        className="mx-auto"
                    />{" "}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 ">
                <div className="   p-12 sm:p-4 flex justify-center items-center">
                    <Image
                        src="/client9.svg"
                        width={1024}
                        height={680}
                        alt="Page Banner"
                        objectFit="cover"
                        className="mx-auto"
                    />{" "}
                </div>
                <div className="   p-12 sm:p-4 flex justify-center items-center">
                    <Image
                        src="/client10.svg"
                        width={1024}
                        height={680}
                        alt="Page Banner"
                        objectFit="cover"
                        className="mx-auto"
                    />{" "}
                </div>
                <div className="  p-12 sm:p-4 flex justify-center items-center">
                    <Image
                        src="/client11.svg"
                        width={1024}
                        height={680}
                        alt="Page Banner"
                        objectFit="cover"
                        className="mx-auto"
                    />{" "}
                </div>
                <div className="  p-12 sm:p-4 flex justify-center items-center">
                    <Image
                        src="/client12.svg"
                        width={1024}
                        height={680}
                        alt="Page Banner"
                        objectFit="cover"
                        className="mx-auto"
                    />{" "}
                </div>
            </div>
        </SectionContainer>
    );
};
