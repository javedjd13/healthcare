const Input = ({ type = "text", placeholder, ...props }) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#009DDE]"
      {...props}
    />
  </>
);

export default Input;
