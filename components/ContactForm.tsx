import { FormProvider, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import InputField from "./InputField";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const methods = useForm();

  const sendEmail = async (formData: any) => {
    await emailjs
      .send("service_liv25q1", "contact_form", formData, "M4VvBRl45mlE2Gg0w")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(sendEmail)}
        className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-3"
      >
        <InputField
          registerName="name"
          id="name"
          type="text"
          placeholder="Name"
          isRequired
          errMessage="Please enter your Name"
        />
        <InputField
          registerName="email"
          id="email"
          type="text"
          placeholder="Email"
          isRequired
          errMessage="Please enter your Email"
        />
        <InputField
          registerName="subject"
          id="subject"
          type="text"
          placeholder="Subject"
          isRequired
          errMessage="Put in subject"
          isFullSpan
        />
        <InputField
          registerName="message"
          id="message"
          type="textarea"
          placeholder="Message"
          isFullSpan
          isRequired
          isTextArea
        />
        <button className="col-span-2 border rounded-sm bg-customDarkGray/70">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
