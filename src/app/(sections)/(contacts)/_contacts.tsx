'use client'
import FloatingBorderInput from "@/app/(components)/_floating_border_input_field";
import CustomButton from "@/app/(components)/_custom_button";
import { sendEmailForm } from "@/app/api/_telegram";
import { useState } from "react";

export default function Contacts() {

    const [disabled, setDisabled] = useState(false)
    const [showConfirmationMessage, setShowConfirmationMessage] = useState(false)

    function isFormEmpty() {
        const name = (document.getElementById("input_name")! as HTMLInputElement).value.replace(/\s/g, "")
        const company = (document.getElementById("input_company")! as HTMLInputElement).value.replace(/\s/g, "")
        const email = (document.getElementById("input_e-mail")!  as HTMLInputElement).value.replace(/\s/g, "")
        const phone = (document.getElementById("input_phone")!  as HTMLInputElement).value.replace(/\s/g, "")
        const message = (document.getElementById("textarea_message")!  as HTMLInputElement).value.replace(/\s/g, "")

        if (name === "" || company === "" || email === "" || phone === "" || message === "") return true
        else return false
    }

    async function generalOnClick() {
        if (showConfirmationMessage) return
        else if (isFormEmpty()) return alert("Please fill the form.")

        const name = (document.getElementById("input_name")! as HTMLInputElement).value
        const company = (document.getElementById("input_company")! as HTMLInputElement).value
        const email = (document.getElementById("input_e-mail")!  as HTMLInputElement).value
        const phone = (document.getElementById("input_phone")!  as HTMLInputElement).value
        const message = (document.getElementById("textarea_message")!  as HTMLInputElement).value



        const formMessage = `Name: ${name}\nCompany: ${company}\nE-mail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        const res = await sendEmailForm(formMessage)
        if (res === 200) {
            setDisabled(true)
            setShowConfirmationMessage(true)
        }
        else {
            alert("Failed to send. Please try again later.")
        }
    }

    return (
        <div id="section_contacts" data-name="section" className="secondary-theme w-full">
            <div className="grid xl:grid-cols-6 sm:grid-cols-4 xs:grid-cols-1">
                {typeof window !== "undefined" && window.matchMedia("(max-width: 9999px) and (min-width: 300px)").matches ?
                    <div className="xl:col-start-3 sm:col-start-2 sm:col-span-3">
                        <div className="contacts-main-screen h-screen grid grid-row-1 items-center justify-items-center">
                            <div className="row-start-1">
                                <div className="text-2xl font-bold text-center xs:mt-10">Contacts</div>
                                <br />
                                <div className="sm:text-lg xs:text-base px-3 text-justified">You can reach out to me by using the form to send a message or through LinkedIn.</div>
                                <div className="inline-flex mt-8 ml-5 mb-8">
                                    <div className="linkedin-blue-icon" />
                                    <a className="ml-3 xl:text-xl xs:text-base underline" target="_blank" href="https://www.linkedin.com/in/amirhossein-mirsoleimani/" rel="noopener noreferrer">
                                        amirhossein-mirsoleimani
                                    </a>
                                </div>
                                <form className="grid items-center justify-items-center" id="form_contacts">
                                    <div className="justify-items-center" id="form_contacts_content">
                                        <div className="grid items-center justify-items-center">
                                            <FloatingBorderInput name={"Name"} disabled={disabled} />
                                            <FloatingBorderInput name={"E-mail"} type="email" disabled={disabled} />
                                        </div>
                                        <div className="grid items-center justify-items-center">
                                            <FloatingBorderInput name={"Company"} customParentLabelClass="long-parent-label" disabled={disabled} />
                                            <FloatingBorderInput name={"Phone"} type="number" disabled={disabled} />
                                        </div>
                                        <div className="grid items-center justify-items-center">
                                            {!showConfirmationMessage ?
                                                <FloatingBorderInput name={"Message"} customParentLabelClass="long-parent-label"
                                                    textArea={true} disabled={disabled}
                                                    textAreaRows={window.matchMedia("(min-width: 1024px)").matches ? 7 : 6}
                                                    textAreaCols={window.matchMedia("(min-width: 1024px)").matches ? 29 : 25} />
                                                :
                                                <div className="text-base text-justified">
                                                    Your message as been sent. Thank you!
                                                </div>
                                            }
                                            <br />
                                            <CustomButton onClick={generalOnClick} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <div className="col-start-2 ml-15">
                            <div className="h-screen grid grid-row-1 items-center justify-items-center">
                                <div className="row-start-1">
                                    <form className="grid items-center justify-items-center ml-[5rem]" id="form_contacts">
                                        <div className="grid grid-cols-2 gap-x-[14rem] justify-items-center ml-[8rem]" id="form_contacts_content">
                                            <div className="col-start-1">
                                                <FloatingBorderInput name={"Name"} disabled={disabled} />
                                                <br />
                                                <FloatingBorderInput name={"E-mail"} type="email" disabled={disabled} />
                                            </div>
                                            <div className="col-start-2">
                                                <FloatingBorderInput name={"Company"} customParentLabelClass="long-parent-label" disabled={disabled} />
                                                <br />
                                                <FloatingBorderInput name={"Phone"} type="number" disabled={disabled} />
                                            </div>
                                            <br />
                                            <div className="col-start-1 col-span-2 items-center justify-items-center">
                                                {!showConfirmationMessage ?
                                                    <FloatingBorderInput name={"Message"} customParentLabelClass="long-parent-label" textArea={true} disabled={disabled} />
                                                    :
                                                    <div className="xl:text-xl xs:text-base text-justified mb-[14rem] ml-[1rem]">
                                                        Your message as been sent. Thank you!
                                                    </div>
                                                }
                                                <br />
                                                <CustomButton onClick={generalOnClick} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-4 items-center justify-items-center mt-[6rem] relative">
                            <div className="text-2xl font-bold">Contacts</div>
                            <div className="absolute top-[8.3rem]">
                                <div className="xl:text-xl xs:text-base text-justified">You can reach out to me by using the form to send a message or through LinkedIn.</div>
                                <div className="inline-flex mt-8">
                                    <div className="linkedin-blue-icon" />
                                    <a className="ml-3 xl:text-xl xs:text-base underline" target="_blank" href="https://www.linkedin.com/in/amirhossein-mirsoleimani/" rel="noopener noreferrer">
                                        amirhossein-mirsoleimani
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div >
    );
};

export const HOME_SECTION_NUMBER = 0;