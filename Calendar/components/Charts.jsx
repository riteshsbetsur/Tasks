import React from "react";
import { CChart } from "@coreui/react-chartjs";

const Charts = () => {
  return (
    <div>
      <CChart
        type="bar"
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "GitHub Commits",
              backgroundColor: "#e555",
              data: [10, 90, 60, 50, 75, 42, 36, 85, 70, 78, 60, 52],
            },
          ],
        }}
        labels="months"
      />
    </div>
  );
};

export default Charts;
