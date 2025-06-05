const Spinner = ({ size = 46 }) => {
  const spinnerSize = `${size}px`;

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="animate-spin rounded-full border-4 border-t-[#f59e0b] border-gray-200"
        style={{ width: spinnerSize, height: spinnerSize }}
      ></div>
    </div>
  );
};

export default Spinner;
