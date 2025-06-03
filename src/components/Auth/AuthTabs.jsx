const AuthTabs = ({ role, setRole }) => {
  const tabs = ["Doctor", "Patient", "Admin"];
  return (
    <div className="flex justify-between bg-gray-100 rounded-md p-1 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setRole(tab)}
          className={`flex-1 py-2 cursor-pointer font-medium rounded-md transition ${
            role === tab ? "bg-[#009DDE] text-white" : "text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default AuthTabs;
