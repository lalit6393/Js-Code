const data = require("./data.json");

//making promises so that code run asynchronously

//promise to sort array according to percentage in 2019

let Performer2019 = new Promise((resolve, reject) =>
  resolve(data.sort((a, b) => parseInt(b[2019]) - parseInt(a[2019])))
);

//promise to sort array according to percentage in 2024

let Performer2024 = new Promise((resolve, reject) =>
  resolve(data.sort((a, b) => parseInt(b[2024]) - parseInt(a[2024])))
);

//promise to sort array according to percentage growth

let growth = new Promise((resolve, reject) =>
  resolve(
    data.sort(
      (a, b) =>
        parseInt(a[2019]) -
        parseInt(a[2024]) -
        (parseInt(b[2019]) - parseInt(b[2024]))
    )
  )
);

//first promise resolves

Performer2019.then((data) => {
  let dataSize = data.length;
  console.log("Rank in 2019: ");
  data.forEach((data, i) => {
    console.log("   Rank " + (i + 1) + " = " + data.skills);
  });
  console.log("Here Are Top Three Performer of 2019: ");
  for (let i = 0; i < 3; i++)
    console.log("   " + (i + 1) + ". " + data[i].skills);

  console.log("Here Are Bottom Three Performer of 2019: ");
  for (let i = dataSize - 1; i > dataSize - 4; i--)
    console.log("   " + (i + 1) + ". " + data[i].skills);
}).catch(console.log);

//Second promise resolves

Performer2024.then((data) => {
  let dataSize = data.length;
  console.log("Rank in 2024: ");
  data.forEach((data, i) => {
    console.log("   Rank " + (i + 1) + " = " + data.skills);
  });
  console.log("Here Are Top Three Performer of 2024: ");
  for (let i = 0; i < 3; i++)
    console.log("   " + (i + 1) + ". " + data[i].skills);

  console.log("Here Are Bottom Three Performer of 2024: ");
  for (let i = dataSize - 1; i > dataSize - 4; i--)
    console.log("   " + (i + 1) + ". " + data[i].skills);
}).catch(console.log);

//Third promise resolves

growth
  .then((data) => {
    let dataSize = data.length;
    console.log("Here are top three fastest growing: ");
    for (let i = 0; i < 3; i++)
      console.log(
        "   " +
          (i + 1) +
          ". " +
          data[i].skills +
          " " +
          (parseInt(data[i][2024]) - parseInt(data[i][2019])) +
          "%"
      );

    console.log("Here are top three fastest declining: ");
    for (let i = dataSize - 1; i > dataSize - 4; i--)
      console.log(
        "   " +
          (i + 1) +
          ". " +
          data[i].skills +
          " " +
          (parseInt(data[i][2024]) - parseInt(data[i][2019])) +
          "%"
      );
  })
  .catch(console.log);
