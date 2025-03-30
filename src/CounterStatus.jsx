function CounterStatus({ count }) {
    return (
      <p>
        {count === 0
          ? "You haven't clicked yet."
          : count < 5
          ? "Keep going!"
          : "You're on fire! 🔥"}
      </p>
    )
  }
  
  export default CounterStatus