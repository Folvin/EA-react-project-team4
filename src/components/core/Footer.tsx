import {Link} from "react-router-dom";
import Section from "../shared/Section";
import TextAndSelect from "./low-order-component/TextAndSelect";

function FooterEa() {
  return (
    <footer className="bg-gray-100">
      <Section className="pt-8 pb-12">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="basis-12 shrink-0">
            {/* the img */}
            <Link className="block" to="/homepage">
              <img
                className="max-h-12"
                src="assets/core/ea-ring-purple-logo.png"
                alt="logo ea-purple"
              />
            </Link>
          </div>

          {/* text and selectbox */}
          <TextAndSelect />
        </div>
      </Section>
    </footer>
  );
}
export default FooterEa;
