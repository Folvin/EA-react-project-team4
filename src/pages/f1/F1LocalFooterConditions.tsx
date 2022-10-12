import { Condition as ConditionInterface } from "../../components/config/Interfaces";

function F1LocalFooterConditions({ arr }: { arr: Array<ConditionInterface> }) {
  return (
    <div>
      <div className="py-4 flex flex-col xl:flex-row xl:justify-between gap-8">
        <img src="assets/pages/f1-ea/codemasters-logo.png" alt='' className="max-w-[100px] lg:max-h-[70px] cursor-pointer" />
        <div className="flex">
          <img src='assets/pages/f1-ea/pegi3-logo.png' alt='Pegi3 logo' className="max-w-[75px] cursor-pointer" />
          <img src='assets/pages/f1-ea/in-game-purchases-logo.jpg' alt='In-game purchase logo' className="max-h-[50px]" />
        </div>
      </div>
      {arr.map((condition, index) => {
        return (
          <div key={index}>
            <p className="py-4 tracking-tight break-words text-gray-400 lg:max-w-[65%]">
              {condition.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default F1LocalFooterConditions;