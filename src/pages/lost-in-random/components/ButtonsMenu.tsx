import Button from "../../../components/shared/Button";
import Section from "../../../components/shared/Section";

function ButtonsMenu() {
  return (
    <Section className="py-20">
      <div className=" flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center max-w-5xl m-auto">
        <Button url="#" className="bg-[#4D4A8A] border-[#4D4A8a] h-14">
          <div className="text-white lg:text-lg m-auto px-2">Leggi la Storia</div>
        </Button>

        <Button url="#" className="bg-[#4D4A8A] border-[#4D4A8a] h-14">
          <div className="text-white lg:text-lg m-auto px-2">Scopri i personaggi</div>
        </Button>

        <Button url="#" className="bg-[#4D4A8A] border-[#4D4A8a] h-14">
          <div className="text-white lg:text-lg m-auto px-2">Panoramica sul gameplay</div>
        </Button>

        <Button url="#" className="bg-[#4D4A8A] border-[#4D4A8a] h-14">
          <div className="text-white lg:text-lg m-auto px-2">Contenuti multimediali</div>
        </Button>

        <Button url="#" className="bg-[#4D4A8A] border-[#4D4A8a] h-14">
          <div className="text-white lg:text-lg m-auto px-2">Acquista ora </div>
        </Button>
      </div>
    </Section>
  );
}

export default ButtonsMenu;
