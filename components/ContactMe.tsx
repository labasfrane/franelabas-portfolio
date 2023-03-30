import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import ContactForm from "./ContactForm";
import { PageInfo } from "@/typings";

type Props = {
  pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
  return (
    <div className="h-screen relative flex flex-col text-center max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="sectionHeader">Contact</h3>
      <div className="flex flex-col space-y-5 mt-24">
        <div className="flex items-center space-x-5 justify-center md:justify-start">
          <EnvelopeIcon className="h-7 w-7" />
          <a href={`mailto:${pageInfo?.email}`}>{pageInfo?.email}</a>
        </div>
        <div className="flex items-center space-x-5 justify-center md:justify-start">
          <PhoneIcon className="h-7 w-7" />
          <a href={`tel:${pageInfo?.phoneNumber}`}>{pageInfo?.phoneNumber}</a>
        </div>{" "}
        <div className="flex items-center space-x-5 justify-center md:justify-start">
          <MapPinIcon className="h-7 w-7" />
          <a href="https://goo.gl/maps/FtDnih2E1MoqPE889">Split, Croatia</a>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactMe;
