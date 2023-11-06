import Section from "./Section";
import LocalFooterLinks from "./low-order-component/PreFooterLinks";
import LocalFooterConditions from "./low-order-component/PreFooterCondition";
import LocalFooterSocialLinks from "./low-order-component/PreFooterSocialLinks";
import { LocalFooterType } from "../config/Interfaces";

function LocalFooterEa({config}: {config: LocalFooterType}) {
  return (
    <Section className={`${config.bgColor} ${config.textColor} py-8`}>
      <div>
        {config.condition && <LocalFooterConditions arr={config.condition} />}
        <div className="pt-4 flex flex-col xl:flex-row justify-between ">
          <div>
            {config.title ? (
              <h1 className="pb-2 font-bold">{config.title}</h1>
            ) : null}

            <LocalFooterLinks
              className="lg:basis-auto"
              arr={config.links}
              config={config}
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
