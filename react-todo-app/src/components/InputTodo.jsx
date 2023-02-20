const InputTodo = () => {
  return;
  <>
    <div>input field here...</div>;
    <form onSubmit={handleSubmit} className="form-container">
      <input
        // ...
        className="input-text"
      />
      <button className="input-submit">Submit</button>
    </form>
    <span className="submit-warning">{message}</span>
  </>;
};

export default InputTodo;
