const myChart = new Chart(document.getElementById("myChart"), {
  type: "polarArea",
  data: {
    labels: ["Facebook", "Twitter", "Github"],
    datasets: [
      {
        label: "Social Chart",
        data: [1000, 2000, 3000],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const myLinearChart = new Chart(document.getElementById("myLinearChart"), {
  type: "bar",
  data: {
    labels: [
      "Facebook",
      "Twitter",
      "Linkedin",
      "Telegram",
      "Instagram",
      "Github",
    ],
    datasets: [
      {
        label: "Social Chart",
        data: [1000, 2000, 3000, 1500, 1600, 3200],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 39, 86, 1)",
          "rgba(255, 203, 86, 1)",
          "rgba(255, 192, 86, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
