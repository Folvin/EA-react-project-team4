import Section from "../../components/shared/Section";
import { LocalFooterType } from "../../components/config/Interfaces";
import F1LocalFooterConditions from "./F1LocalFooterConditions";
import F1LocalFooterLinks from "./F1LocalFooterLinks";
import F1LocalFooterSocialLinks from "./F1LocalFooterSocialLinks";

function F1LocalFooterEa({ config, className }: { config: LocalFooterType, className: string }) {
  return (
    <Section className={`${config.bgColor} ${config.textColor} ${className} py-4`}>
      <div className="2xl:px-48">
        <div className="pt-4 flex flex-col xl:flex-row justify-between  ">
          <div>
            {config.title ? (
              <h1 className="pb-2 font-bold">{config.title}</h1>
            ) : null}
            {/* Component for links of LocalFooter */}
            <F1LocalFooterLinks
              className="basis-2/5 md:basis-auto"
              arr={config.links}
              config={config}
            />
            <hr className="border-gray-500 mt-4 xl:hidden" />
          </div>
          {/* Component for Social Media icon of LocalFooter */}
          <F1LocalFooterSocialLinks arr={config.social} />
        </div>
        {/* Component for Disclaimer and politicy for the game of F122 */}
        {config.condition && <F1LocalFooterConditions arr={config.condition} />}
      </div>
    </Section>
  );
}

export default F1LocalFooterEa;
