const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");

/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
function numberOfKeys(obj) {
  const keys = _.keys(obj).length
  return keys
}

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {
 return _.sum(_.remove(array))
}

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {
 return _.fromPairs(member)
}

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {
  return _.groupBy(collection, "instructor")
  
}

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {
 return _.map(collection, member => _.omit(member, "age"))
}

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructorName) {
 const classByInstructor = _.filter(collection, {instructor: instructorName})
  if (classByInstructor.length > 0) {
  return classByInstructor.length
  } else {
      return `There is no instructor by that name.`
    }
  }
  



/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {
  const activeMembers = _.filter(collection, { currentMember: true });
  return activeMembers
}

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
  const uniqueClasses = _.uniqBy(collection, "title");

  const result = uniqueClasses.map(({ title, priceInCents }) => ({
    title,
    priceInCents 
  }));

  return result;
}

// // Call the function with the provided class data
// const uniqueClasses = getUniqueClasses(classes);

// // Log the result to the console
// console.log(uniqueClasses);
  // emptyArr = []
  // const result = _.map(collection, obj => _.pick(obj, ['priceInCents','title']));
  // emptyArr.push(result)
  // return emptyArr

  // const uniqueClasses = _.uniqBy(collection, title)
  // const result = uniqueClasses.map(({ title, price }) => ({ title, price }));
  // return result


/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  const orderedClasses = _.orderBy(collection, ['title', 'level'], ['asc', 'desc']);
  const result = orderedClasses.map(({ title, instructor, level }) => ({
    title,
    instructor,
    level
  }));
  return result
}

module.exports = {
  numberOfKeys,
  sumNumbers,
  newMemberArrayToObject,
  groupClassByInstructor,
  omitAgeFromMembers,
  countClassesByInstructor,
  removeInactiveMembers,
  getUniqueClasses,
  orderClassesByTitleAndLevel,
};
