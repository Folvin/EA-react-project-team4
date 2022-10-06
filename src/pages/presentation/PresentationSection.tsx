import {ReactNode} from "react";
import Section from "../../components/shared/Section";
import Title from "./Title";

interface Props {
  children: ReactNode;
  title: string;
}

function PresentationSection({children, title}: Props) {
  return (
    <Section className="py-6">
      <div className="bg-gray-50 p-4 border-black border-2">
        <Title>{title}</Title>
        <div className="mt-2">{children}</div>
      </div>
    </Section>
  );
}

export default PresentationSection;
