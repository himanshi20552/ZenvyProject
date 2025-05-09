// JSON Data
const data = {
    fees: [
      {
        lumpsum: "₹95000",
        firstInstallment: "₹50000",
        secondInstallment: "₹50000",
        total: "₹100000"
      }
    ],
    batches: [
      { phase: "Phase I", mode: "Classroom", code: "XI-01", start: "10/04/2024", end: "07/04/2024" },
      { phase: "Phase II", mode: "Classroom", code: "XI-02", start: "10/05/2024", end: "07/05/2024" },
      { phase: "Phase III", mode: "Classroom", code: "XI-03", start: "10/06/2024", end: "07/06/2024" },
      { phase: "Phase IV", mode: "Classroom", code: "XI-04", start: "10/07/2024", end: "07/07/2024" },
      { phase: "Phase V", mode: "Classroom", code: "XI-05", start: "10/08/2024", end: "07/08/2024" }
    ]
  };
  
  // Load Fee Details
  const feesBody = document.getElementById("feesData");
  data.fees.forEach(fee => {
    const row = `<tr>
      <td>${fee.lumpsum}</td>
      <td>${fee.firstInstallment}</td>
      <td>${fee.secondInstallment}</td>
      <td>${fee.total}</td>
    </tr>`;
    feesBody.innerHTML += row;
  });
  
  // Load Batch Details
  const batchBody = document.getElementById("batchData");
  data.batches.forEach(batch => {
    const row = `<tr>
      <td>${batch.phase}</td>
      <td>${batch.mode}</td>
      <td>${batch.code}</td>
      <td>${batch.start}</td>
      <td>${batch.end}</td>
    </tr>`;
    batchBody.innerHTML += row;
  });
  
  // Enroll Button Action
  function enroll() {
    alert("Redirecting to enrollment page...");
  }
  