// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Lesnar";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "somu05@gmail.com",
  fullname: {
    userfullname:{
      firstname: "Siddhant",
      lastname: "Dave",
    }
  }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

// Merging the Two Objects.

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "c", 6: "d"};

// const obj3 = Object.assign({}, obj1, obj2, obj4);  //See the Documentation of it Object.Assign.
// console.log(obj3);

const obj3 = {...obj1, ...obj2};  //Spread method used in the array too.
// console.log(obj3);

const users = [              // From the Databases the data came as the arrays of the object.
  {
    id : 1,        
    email: "h@gmail.com",
  },
  {
    id : 1,        
    email: "h@gmail.com",
  },
  {
    id : 1,        
    email: "h@gmail.com",
  },

]

users[1].email;;
// console.log(tinderUser);

 console.log(Object.keys(tinderUser));  //Accessing all the keys of the Object TinderUser with the help of this method and it will be stored in an array.

// console.log(Object.values(tinderUser));  //Accessing all the values of the Object TinderUser with the help of this method and it will be stored in an array.

 console.log(Object.entries(tinderUser));  //Run it and see the output and compare it.

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //Gave us the true if the value is there and if the value is not there then gave us the false.

// console.log(tinderUser.hasOwnProperty('LoggedIn'));


const course = {
  coursename: "JS by Hitesh",
  price: "999",
  courseInstructor: "Hitesh",
}

// course.courseInstructor // We wll be using another syntax below is the another syntax.

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course  // We will be destructuring the value of the courseInstructor and it will print thr same output.
console.log(instructor);