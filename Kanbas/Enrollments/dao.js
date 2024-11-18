import Database from "../Database/index.js";

export function findAllEnrollmemnts() {
  return Database.enrollments;
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnrollment = { _id: Date.now().toString(), user: userId, course: courseId };
  enrollments.push(newEnrollment);
  return newEnrollment;
}

export function unEnrollFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter((e) => !(e.user === userId && e.course === courseId));
}
