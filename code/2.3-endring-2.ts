/**
 * Function that greets a person
 * @param firstname First name
 * @param lastname Last name
 */

export const greeting = (firstname: string, lastname: string) => {
  console.log(`Hei hei ${firstname} ${lastname}`);
};

const people = [
  { firstname: "Magnus", lastname: "Magnusson" },
  { firstname: "Stefan", lastname: "Stefanson" },
];

export const greetTheGang = () => {
  people.forEach((person) => {
    greeting(person.firstname, person.lastname);
  });
};
