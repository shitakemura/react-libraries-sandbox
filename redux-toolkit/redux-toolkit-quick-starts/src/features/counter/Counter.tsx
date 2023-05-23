import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <span>{count}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment 100"
          onClick={() => dispatch(incrementByAmount(100))}
        >
          +100
        </button>
        <button aria-label="Reset value" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  )
}
