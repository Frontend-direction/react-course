import useCounter from '../hooks/use-counter';
import Button from '../components/Button';

function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      Count is{count}
      <Button onClick={increment}>
        Increment
      </Button>
    </div>
  )
}


export default CounterPage;