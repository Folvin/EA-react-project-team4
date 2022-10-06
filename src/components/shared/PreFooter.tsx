import Section from "./Section";
import LocalFooterLinks from "./low-order-component/PreFooterLinks";
import LocalFooterConditions from "./low-order-component/PreFooterConditions";
import LocalFooterSocialLinks from "./low-order-component/PreFooterSocialLinks";
import config from "../config/LocalFooterHome";

function LocalFooterEa() {
  return (
    <Section className={`${config.bgColor} ${config.textColor} py-8`}>
      <div>
        <LocalFooterConditions arr={config.condition} />
        <div className="pt-4 flex flex-col xl:flex-row justify-between ">
          <div>
            {config.title ? (
              <h1 className="pb-2 font-bold">{config.title}</h1>
            ) : null}

            <LocalFooterLinks
              className="lg:basis-auto"
              arr={config.links}
            />
            <hr className="border-gray-500 mt-4 xl:hidden" />
          </div>
          <LocalFooterSocialLinks arr={config.social} />
        </div>
      </div>
    </Section>
  );
}

export default LocalFooterEa;
