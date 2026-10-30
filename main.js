
import { calculateAverage, capitalizeWords } from "./utils.js";

// Utility 1: Calculate the average grade
const grades = [88, 95, 72, 91, 65];
const average = calculateAverage(grades);

console.log("Average Grade:", average);

// Utility 2: Capitalize each word
const studentName = "jamaluddin jamshidi";
const formattedName = capitalizeWords(studentName);

console.log("Student Name:", formattedName);
