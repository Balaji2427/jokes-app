const Shimmer = () => {
  return (
    <div className="d-flex align-items-center justify-content-center pt-5">
      <h1>Loading Jokes...</h1>
      <div
        className="spinner-border ms-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Shimmer;
