import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";
import Image from "next/image";

const ColumnData = [
    {
        id: uuid(),
        title: "Howard Leiner",
        icon: "/review1.webp",
        content:
            "Best Document AI solution that comes with pre-trained APIs a CRE lender needs. ''Amongst others, the biggest advantage of partnering with Docsumo is the data capture accuracy they’re able to deliver. We’re witnessing a 95%+ STP rate, that means we don’t even have to look at risk assessment documents 95 out of 100 times, and the extracted data is directly pushed into the database.''"
    },
    {
        id: uuid(),
        title: "Daniel Tilipman",
        icon: "/review2.webp",
        content:
            "Docsumo is your go-to solution if you need a flexible solution to capture data from unstructured documents. ''Docsumo does a very good job when it comes to our specific use-case. Debt settlement letters vary a lot from each other, but Docsumo manages to capture data accurately almost every single time at the processing speed which is unprecedented. We’re witnessing the STP rate of over 95% with Docsumo.''"
    },
    {
        id: uuid(),
        title: "Michael Rudman",
        icon: "/review3.webp",
        content:
            "With Docsumo we are now able to process thousands of ACORD Forms in a day.''We were looking for a tech partner to automate analysis of certificates of insurance for our real estate liability management software. We are really happy with Docsumo’s APIs and their team’s dedication to solving our problem. We are now able to process thousands of ACORD forms a day automatically while being able to get accurate analytics from over 100 data points.''"
    },
    {
        id: uuid(),
        title: "Prashanth Ranganathan",
        icon: "/review4.webp",
        content:
            "Best in class for capturing data from financial documents. ''We are using Docsumo’s APIs for automating data capture from bank statements and identity cards while on-boarding customers. It has reduced the time our operations team spends on data entry by manifolds while providing a much better customer experience.''"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Image
                        src={item.icon}
                        className="mb-4 my-2 mx-auto"
                        width={1024}
                        height={680}
                        alt="review1"
                        objectFit="cover"
                    />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
