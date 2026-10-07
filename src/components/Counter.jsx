function Counter({ value, onIncrease, onDecrease }) {
  return (
    <section className="panel" aria-labelledby="counter-heading">
      <div className="panel-heading">
        <h2 id="counter-heading">Counter</h2>
        <span className="panel-kicker">INTERACTIVE STATE</span>
      </div>
      <div className="counter-body">
        <p className="counter-label">Current value</p>
        <p className="counter-value" aria-live="polite">{value}</p>
        <div className="counter-controls">
          <button className="counter-button secondary" type="button" onClick={onDecrease}>
            <span className="button-symbol" aria-hidden="true">−</span>
            Decrease
          </button>
          <button className="counter-button" type="button" onClick={onIncrease}>
            <span className="button-symbol" aria-hidden="true">+</span>
            Increase
          </button>
        </div>
      </div>
    </section>
  )
}

export default Counter