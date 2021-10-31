const faker = require('faker');
console.log(faker.name.jobTitle());
const jobTitle = faker.name.jobTitle();
const validUntil = new Date();
const jobDescription = `We're looking for ${jobTitle.toLowerCase()}s to help us with our new project.`;
console.log(jobDescription);
//# sourceMappingURL=index.js.map