// setTimeout(() => {
//   console.log("прошло 2 секунды");
// }, 2000);

// console.log("привет");

// const getAfterDelay = () => {
//   console.log("прошло 2 секунды");
// };

// setInterval(getAfterDelay, 2000);

// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Операция успешно выполнена");
//   } else {
//     reject(new Error("ошибка"));
//   }
// });

const getResult = async (status: boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("Операция успешно выполнена");
      } else {
        reject("ошибка");
      }
    }, 1000);
  });
};
getResult(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise завершен");
  });

console.log("привет");
