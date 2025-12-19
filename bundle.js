"use strict";
// const childHeight: number = 1
const employees = [
    { name: "Rina", age: 58, isActive: true, sallary: "70000" },
    { name: "Kathryn", age: 25, isActive: false, sallary: "130045" },
    { name: "Wilfred", age: 17, isActive: true, sallary: "100000" },
    { name: "Genna", age: 26, isActive: true, sallary: "122300" },
    { name: "Celle", age: 25, isActive: true, sallary: "120540" },
    { name: "Torre", age: 24, isActive: false, sallary: "210320" },
    { name: "Amerigo", age: 46, isActive: false, sallary: "210340" },
    { name: "Shayne", age: 11, isActive: true, sallary: "210400" },
    { name: "Darline", age: 32, isActive: false, sallary: "450000" },
    { name: "Rourke", age: 64, isActive: false, sallary: "1200000" },
];
const activeEmpl = employees.filter(act => act.isActive);
console.log("Активные сотрудники: ", activeEmpl);
const emplAbove30 = employees.filter((above30) => above30.age >= 30);
console.log("Сотрудники старше 30 лет: ", emplAbove30);
//Отсортировать всех сотрудников по возрасту по возрастанию.
const sortedByAge = employees.sort((a, b) => a.age - b.age);
console.log("Сотрудники, отсортированные по возрасту: ", sortedByAge);
//Добавить нового сотрудника
// { name: "Alex", age: 29, isActive: true, sallary: "95000" } в начало массива.
const newEmpl = { name: "Alex", age: 29, isActive: true, sallary: "95000" };
employees.unshift(newEmpl);
console.log("Массив сотрудников после добавления нового в начало: ", employees);
//Удалить последнего сотрудника из массива.
employees.pop();
const avgSalary = employees.reduce((sum, emp) => sum + Number(emp.sallary), 0) / employees.length;
console.log("Средняя зарплата сотрудников: ", avgSalary);
