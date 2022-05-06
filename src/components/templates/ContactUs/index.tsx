import { FormContactUs } from "../../organisms/FormContactUs"

function ContactUs() {
  return (
    <section
      id="contactUs"
      className="bg-newGray-50 dark:bg-newGray-800 px-6 pt-9 pb-16 md:px-32 md:py-24 md:flex md:flex-col md:items-center"
    >
      <FormContactUs />
    </section>
  )
}

export { ContactUs }