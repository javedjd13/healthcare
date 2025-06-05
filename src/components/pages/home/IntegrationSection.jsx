// import { FaHospitalAlt, FaFileMedical, FaVideo } from "react-icons/fa";
// import NhsIcon from "../../../assets/images/NHS.png";
// const integrations = [
//   {
//    img: <img src={NhsIcon} size={32} alt="Telehealth" className="h-8" />,
//   },
//   {
//     img: <FaFileMedical size={32} className="text-[#0191C6]" />,
//     title: "EMRs",
//   },
//   {
//     // img: <FaVideo size={32} className="text-[#0191C6]" />,
//     img: <img src={NhsIcon} size={32} alt="Telehealth" className="h-8" />,
//     title: "Telehealth portals",
//   },
// ];

// const IntegrationSection = () => {
//   return (
//     <section className="py-12 px-4 bg-white">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-8">
//           Seamless integration with
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {integrations.map((item, index) => (
//             <div
//               key={index}
//               className="border border-[#0191C6] rounded-md py-6 px-4 flex justify-center items-center hover:shadow-md transition"
//             >
//               {item.img}
//               <p className="mt-4 text-blue-600 font-medium">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntegrationSection;
import { FaFileMedical } from "react-icons/fa";
import NhsIcon from "../../../assets/images/NHS.png";
import EmrsIcon from "../../../assets/images/emrs-img.png";
import TeleHealthIcon from "../../../assets/images/Telehealth-portals.png";

const integrations = [
  {
    img: null,
    title: "NHS",
    isTextOnly: true,
  },
//   Telehealth-portals.png
  {
    img: <img src={EmrsIcon} alt="Telehealth" className="h-13" />,
    title: "EMRs",
    isTextOnly: false,
  },
  {
    img: <img src={TeleHealthIcon} alt="Telehealth" className="h-13" />,
    title: "Telehealth portals",
    isTextOnly: false,
  },
];

const IntegrationSection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Seamless integration with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="border border-[#0191C6] rounded-xl py-6 px-4 flex flex-col items-center justify-center text-center hover:shadow-md transition"
            >
              {/* Agar text-only hai (like NHS), toh bada bold text */}
              {item.isTextOnly ? (
                <p className="text-[#0191C6] text-lg font-semibold italic">{item.title}</p>
              ) : (
                <>
                  {item.img}
                  <p className="mt-3 text-[#0191C6] text-sm font-medium">{item.title}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
