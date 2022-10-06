import Section from "../../components/shared/Section";
import LocalFooterSocialLinks from "../../components/shared/low-order-component/PreFooterSocialLinks";
import { LocalFooterType } from "../../components/config/Interfaces";
import F1LocalFooterConditions from "./F1LocalFooterConditions";
import F1LocalFooterLinks from "./F1LocalFooterLinks";
import F1LocalFooterSocialLinks from "./F1LocalFooterSocialLinks";

function F1LocalFooterEa({ config }: { config: LocalFooterType }) {
  return (
    <Section className={`${config.bgColor} ${config.textColor} py-4`}>
      <div>

        <div className="pt-4 flex flex-col xl:flex-row justify-between ">
          <div>
            {config.title ? (
              <h1 className="pb-2 font-bold">{config.title}</h1>
            ) : null}

            <F1LocalFooterLinks
              className="basis-2/5 md:basis-auto"
              arr={config.links}
              config={config}
            />
            <hr className="border-gray-500 mt-4 xl:hidden" />
          </div>
          <F1LocalFooterSocialLinks arr={config.social} />

        </div>
        <F1LocalFooterConditions arr={config.condition}  />
      </div>
    </Section>
  );
}

export default F1LocalFooterEa;