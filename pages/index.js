import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Client } from "@components/Client";
import { MotionBTTContainer } from "@components/Motion";
import { Contact } from "@components/Contact";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Docsumo - Document AI Platform Built for Scale & Efficiency "
                description="Automate data extraction, validation & analytics from unstructured documents with 100% accuracy. Get 10 times more efficient at processing various documents with Docsumo(')s IDP solution and custom-made APIs."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="Products" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Products</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Why use Docsumo?
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Nobody likes to wade through unstructured
                                    data. That&apos;s why we built Docsumo, so
                                    you can easily process data from mountains
                                    of unstructured documents with 99%+
                                    accuracy.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="MoreFeatures"
                            className="feature-tabs"
                        >
                            <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Minimize manual efforts processing docs.
                                Maximize data accuracy.
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Our easy, self-serve interface enables 10X
                                    efficiency for your teams and business
                                    processes. Say bye-bye to manual data
                                    extraction and human errors. Here’s how you
                                    can digitize:
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/feature1.webp"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            INTEGRATION AND EXTRACTION STATUS
                                        </CardHeader>
                                        <p>
                                            Get custom outputs in CSV, XLS, JSON
                                            that easily integrate with your
                                            industry-specific software such as
                                            CRMs, ERPs, HCMs, Accounting, and
                                            Payroll softwares.Know number of
                                            documents uploaded, approved, and
                                            held for review. Our out-of-the-box
                                            insights give you status metrics
                                            without any add-on integrations or
                                            IT assistance.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/feature2.webp"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            UNMATCHED ACCURACY WITH
                                            HUMAN-IN-THE-LOOP
                                        </CardHeader>
                                        <p>
                                            Get humans to review failed
                                            validations or fields with low
                                            confidence scores. Share review
                                            links with anyone or embed the
                                            review screen in your existing
                                            process itself.Use Excel-like
                                            formula to validate co-dependent
                                            extracted data within a document.
                                            Validate extracted data against
                                            databases for one more round of
                                            checks.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                Make better business decisions with accurate
                                data. Here’s our client reviews.
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="Clients" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Clients</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Trusted by the world’s biggest data-driven
                                businesses
                            </PageTitle>
                            <Client />
                        </SectionContainer>
                    </MotionBTTContainer>
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="Contact">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Contact</BadgeMessage>
                            </BadgeGroup>
                            <Contact />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
