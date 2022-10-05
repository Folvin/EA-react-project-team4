import {Condition as ConditionInterface} from '../config/Interfaces';

function LocalFooterConditions({ arr }: { arr: Array<ConditionInterface> }) {
  return (
    <div>
      {arr.map((condition, index) => {
        return (
          <>
            <p className="py-4 tracking-tight" key={index}>{condition.value}</p>
            <hr style={{ borderColor: 'gray' }} />
          </>
        )
      })}
    </div>
  )
}

export default LocalFooterConditions