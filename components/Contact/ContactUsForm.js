import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactUsForm = () => {
    const validationSchema = Yup.object().shape({
        full_name: Yup.string().required("Please complete this required field"),
        work_email: Yup.string()
            .email("Invalid email address")
            .test("is-work-email", "Only work email allowed", (value) => {
                // Custom validation for work email
                return value && value.endsWith("@work.com");
            })
            .required("Please complete this required field"),
        phone_number: Yup.string()
            .matches(/^[0-9]+$/, "Phone Number must contain only digits")
            .required("Please complete this required field"),
        company_name: Yup.string().required(
            "Please complete this required field"
        ),
        job_title: Yup.string().required("Please complete this required field"),
        no_of_docs: Yup.number()
            .min(0, "Number of Docs cannot be negative")
            .required("Please complete this required field")
    });

    const initialValues = {
        full_name: "",
        work_email: ""
    };

    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

    const handleSubmit = async (values) => {
        console.log("Form submitted:", values);
        try {
            const response = await fetch(
                "https://webhook.site/a4f01968-888c-4d92-8211-a793a112fe5d",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                }
            );

            if (response.ok) {
                console.log("Form submitted successfully:", values);
                setIsSubmissionSuccessful(true);
            } else {
                console.error("Error submitting form:", response.statusText);
                setIsSubmissionSuccessful(false);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setIsSubmissionSuccessful(false);
        }
    };

    return (
        <>
            {isSubmissionSuccessful && (
                <div className="success-message">
                    Data submitted successfully!
                </div>
            )}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-6">
                        <div className="mx-0 mb-1 sm:mb-4">
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label
                                    htmlFor="full_name"
                                    className="pb-1 text-xs uppercase tracking-wider"
                                >
                                    Full name
                                </label>
                                <Field
                                    type="text"
                                    id="full_name"
                                    placeholder="Your Full name"
                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                    name="full_name"
                                />
                                <ErrorMessage
                                    name="full_name"
                                    component="div"
                                    className="error-message"
                                />
                            </div>

                            <div className="mx-0 mb-1 sm:mb-4">
                                <label
                                    htmlFor="work_email"
                                    className="pb-1 text-xs uppercase tracking-wider"
                                >
                                    {" "}
                                    Work email
                                </label>
                                <Field
                                    type="email"
                                    id="work_email"
                                    placeholder="Your email here"
                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                    name="work_email"
                                />
                                <ErrorMessage
                                    name="work_email"
                                    component="div"
                                    className="error-message"
                                />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label
                                    htmlFor="phone_number"
                                    className="pb-1 text-xs uppercase tracking-wider"
                                >
                                    {" "}
                                    Phone number
                                </label>
                                <Field
                                    type="tel"
                                    id="phone_number"
                                    placeholder="Your Phone number here"
                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                    name="phone_number"
                                />
                                <ErrorMessage
                                    name="phone_number"
                                    component="div"
                                    className="error-message"
                                />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label
                                    htmlFor="company_name"
                                    className="pb-1 text-xs uppercase tracking-wider"
                                >
                                    {" "}
                                    Company name
                                </label>
                                <Field
                                    type="text"
                                    id="company_name"
                                    placeholder="Your Company name"
                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                    name="company_name"
                                />
                                <ErrorMessage
                                    name="company_name"
                                    component="div"
                                    className="error-message"
                                />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label
                                    htmlFor="job_title"
                                    className="pb-1 text-xs uppercase tracking-wider"
                                >
                                    {" "}
                                    Job title
                                </label>
                                <Field
                                    type="text"
                                    id="job_title"
                                    placeholder="Your Job title"
                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                    name="job_title"
                                />
                                <ErrorMessage
                                    name="job_title"
                                    component="div"
                                    className="error-message"
                                />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label
                                    htmlFor="no_of_docs"
                                    className="pb-1 text-xs uppercase tracking-wider"
                                >
                                    {" "}
                                    Documents processed/month
                                </label>
                                <Field
                                    type="number"
                                    id="no_of_docs"
                                    placeholder="No of Docs processed"
                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                    name="no_of_docs"
                                />
                                <ErrorMessage
                                    name="no_of_docs"
                                    component="div"
                                    className="error-message"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                        >
                            Schedule Demo
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

export default ContactUsForm;
