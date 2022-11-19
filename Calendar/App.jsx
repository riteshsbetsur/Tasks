// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const App = () => {
//   const [date, setDate] = useState(new Date());
//   return (
//     <section>
//       <article>
//         <div className="app">
//           <h1 className="text-center">CALENDAR</h1>
//           <div className="calendar-container">
//             <Calendar onChange={setDate} value={date} />
//           </div>
//           <p className="text-date">
//             <span className="bold">
//               <b>Selected Date:</b>{" "}
//             </span>
//             {date.toDateString()}
//           </p>
//         </div>
//       </article>
//     </section>
//   );
// };

// export default App;



//!===== Graph ======

import React from 'react'
import Charts from './components/Charts'

const App = () => {
  return (
    <div>
      <Charts/>
    </div>
  )
}

export default App

