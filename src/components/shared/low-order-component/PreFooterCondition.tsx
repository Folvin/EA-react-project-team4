import {Condition as ConditionInterface} from "../../config/Interfaces";

function LocalFooterConditions({arr}: {arr: Array<ConditionInterface>}) {
  return (
    <div>
      {arr.map((condition, index) => {
        return (
          <div key={index}>
            <p className="py-4 tracking-tight break-words">
              {condition.value}
            </p>
            <hr style={{borderColor: "gray"}} />
          </div>
        );
      })}
    </div>
  );
}

export default LocalFooterConditions;
