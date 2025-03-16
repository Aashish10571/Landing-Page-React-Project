import { SelectedPage } from "../../app/utility/AppEnums"
import AccessImage from '../../assets/icon-access-anywhere.svg'
import SecurityImage from '../../assets/icon-security.svg'
import CollaborationImage from '../../assets/icon-collaboration.svg'
import LocationImage from '../../assets/icon-any-file.svg'
import Feature from "./Feature"

const FeatureSection = () => {
  return (
    <div
      id={SelectedPage.Features}
      className="bg-primary-main-bg pt-16 pb-28"
    >
      <section className="w-4/5 grid grid-cols-1 gap-24 mx-auto md:grid-cols-2">
        <Feature
          title="Access your files, anywhere"
          description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
          image={AccessImage}
        />
        <Feature
          title=" Security you can trust"
          description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
          image={SecurityImage}
        />
        <Feature
          title="Real-time collaboration"
          description="The Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
          image={CollaborationImage}
        />
        <Feature
          title="Store any type of file"
          description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
          image={LocationImage}
        />
      </section>
    </div>
  )
}

export default FeatureSection
