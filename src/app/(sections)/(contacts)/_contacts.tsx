"use client";
import FloatingBorderInput from "@/app/(components)/_floating_border_input_field";
import CustomButton from "@/app/(components)/_custom_button";
import { sendEmailForm } from "@/app/api/_telegram";
import { useEffect, useState } from "react";

export default function Contacts() {
  const [disabled, setDisabled] = useState(false);
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const [screen, setScreen] = useState(null as unknown as boolean);

  useEffect(() => {
    if (!screen && window)
      setScreen(window.matchMedia("(min-width: 768px)").matches);
  }, [screen]);

  function isFormEmpty() {
    const name = (
      document.getElementById("input_name")! as HTMLInputElement
    ).value.replace(/\s/g, "");
    const company = (
      document.getElementById("input_company")! as HTMLInputElement
    ).value.replace(/\s/g, "");
    const email = (
      document.getElementById("input_e-mail")! as HTMLInputElement
    ).value.replace(/\s/g, "");
    const phone = (
      document.getElementById("input_phone")! as HTMLInputElement
    ).value.replace(/\s/g, "");
    const message = (
      document.getElementById("textarea_message")! as HTMLInputElement
    ).value.replace(/\s/g, "");

    if (
      name === "" ||
      company === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    )
      return true;
    else return false;
  }

  async function generalOnClick() {
    if (showConfirmationMessage) return;
    else if (isFormEmpty()) return alert("Please fill the form.");

    const name = (document.getElementById("input_name")! as HTMLInputElement)
      .value;
    const company = (
      document.getElementById("input_company")! as HTMLInputElement
    ).value;
    const email = (document.getElementById("input_e-mail")! as HTMLInputElement)
      .value;
    const phone = (document.getElementById("input_phone")! as HTMLInputElement)
      .value;
    const message = (
      document.getElementById("textarea_message")! as HTMLInputElement
    ).value;

    const formMessage = `Name: ${name}\nCompany: ${company}\nE-mail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const res = await sendEmailForm(formMessage);
    if (res === 200) {
      setDisabled(true);
      setShowConfirmationMessage(true);
    } else {
      alert("Failed to send. Please try again later.");
    }
  }

  return (
    <div
      id="section_contacts"
      data-name="section"
      data-index="5"
      data-continue-classname="stretch"
      className="primary-theme w-full"
    >
      <div className="h-screen grid grid-row-1 items-center justify-items-center">
        <div className="grid row-start-1 items-center justify-items-center">
          <div className="grid items-start justify-items-end">
            <div
              id="accent_left_triangleup_contacts"
              className="accent-left-triangle-up mt-[-8.85rem] mr-[-1px] xs:mr-[0px]"
            />
          </div>
          <div className="grid items-start justify-items-start">
            <div
              id="accent_right_triangleup_contacts"
              className="accent-right-triangle-up mt-[-8.85rem] ml-[2px] xs:ml-[2px]"
            />
          </div>

          {screen ? (
            <div className="grid grid-cols-2">
              <div className="grid col-start-1 items-start justify-items-center">
                <FloatingBorderInput name={"Name"} disabled={disabled} />
                <FloatingBorderInput
                  name={"E-mail"}
                  type="email"
                  disabled={disabled}
                />
                <FloatingBorderInput
                  name={"Company"}
                  customParentLabelClass="long-parent-label"
                  disabled={disabled}
                />
                <FloatingBorderInput
                  name={"Phone"}
                  type="number"
                  disabled={disabled}
                />
              </div>
              <div className="grid col-start-2 items-center justify-items-center">
                {!showConfirmationMessage ? (
                  <FloatingBorderInput
                    name={"Message"}
                    customParentLabelClass="long-parent-label"
                    textArea={true}
                    disabled={disabled}
                    textAreaRows={screen ? 7 : 6}
                    textAreaCols={screen ? 29 : 25}
                  />
                ) : (
                  <div className="text-base text-justified">
                    Your message as been sent. Thank you!
                  </div>
                )}
                <CustomButton onClick={generalOnClick} />
              </div>
            </div>
          ) : (
            <>
              <FloatingBorderInput name={"Name"} disabled={disabled} />
              <FloatingBorderInput
                name={"E-mail"}
                type="email"
                disabled={disabled}
              />
              <FloatingBorderInput
                name={"Company"}
                customParentLabelClass="long-parent-label"
                disabled={disabled}
              />
              <FloatingBorderInput
                name={"Phone"}
                type="number"
                disabled={disabled}
              />
              {!showConfirmationMessage ? (
                <FloatingBorderInput
                  name={"Message"}
                  customParentLabelClass="long-parent-label"
                  textArea={true}
                  disabled={disabled}
                  textAreaRows={screen ? 7 : 6}
                  textAreaCols={screen ? 29 : 25}
                />
              ) : (
                <div className="text-base text-justified">
                  Your message as been sent. Thank you!
                </div>
              )}

              <CustomButton onClick={generalOnClick} />
            </>
          )}

          <div className="grid items-start justify-items-end">
            <div
              id="accent_left_triangledown_contacts"
              className="accent-left-triangle-down mt-[9rem] mr-[-2px]"
            />
          </div>
          <div className="grid items-start justify-items-start">
            <div
              id="accent_right_triangledown_contacts"
              className="accent-right-triangle-down mt-[9rem]"
            />
          </div>
          <div className="grid items-start">
            <div
              id="accent_continue_contacts"
              className="accent-continue mr-[-1px] mt-[9rem] z-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const HOME_SECTION_NUMBER = 0;
