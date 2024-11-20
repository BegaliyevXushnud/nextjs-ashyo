// export default function Cool() {
//     const categories = [
//       {
//         id: 1,
//         name: "Noutbooklar",
//         image: "/images/laptop.jpg",
//         bgColor: "bg-purple-200",
//       },
//       {
//         id: 2,
//         name: "Konditsioner",
//         image: "/images/ac.jpg",
//         bgColor: "bg-gray-200",
//       },
//       {
//         id: 3,
//         name: "Smartfonlar",
//         image: "/images/smartphone.jpg",
//         bgColor: "bg-gray-100",
//       },
//       {
//         id: 4,
//         name: "Kir yuvish mashinasi",
//         image: "/images/washing-machine.jpg",
//         bgColor: "bg-gray-200",
//       },
//       {
//         id: 5,
//         name: "Televizorlar",
//         image: "/images/tv.jpg",
//         bgColor: "bg-yellow-200",
//       },
//       {
//         id: 6,
//         name: "Muzlatgichlar",
//         image: "/images/fridge.jpg",
//         bgColor: "bg-gray-100",
//       },
//     ];
  
//     return (
//       <div className="bg-gray-100 flex justify-center items-center min-h-screen">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white rounded-lg shadow-lg">
//           {/* Dinamik ravishda kategoriya elementlarini chiqarish */}
//           {categories.map((category) => (
//             <div
//               key={category.id}
//               className={`relative ${category.bgColor} rounded-xl p-6`}
//             >
//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="w-full h-56 object-cover rounded-lg"
//               />
//               <p className="absolute top-3 left-3 bg-white px-4 py-2 rounded-lg text-lg font-semibold shadow">
//                 {category.name}
//               </p>
//             </div>
//           ))}
  
//           {/* Ko‘proq tugmasi */}
//           <div className="col-span-1 md:col-span-3 flex justify-center items-center">
//             <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-blue-700">
//               Ko‘proq
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
  