//* Problem:1  radianToDegree

//* ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

// function radianToDegree(radian){
//     const degrees = radian * 57.2958;
//     return parseFloat(degrees.toFixed(2))
// }
// const degrees = radianToDegree(10);
// console.log(degrees)

//* Problem:2  isJavaScriptFile 

//* ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

// function isJavaScriptFile(fileName) {
//     if (fileName.toLowerCase().endsWith('.js')) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const checkFile = isJavaScriptFile('test.js');
// console.log(checkFile)

//* Problem 3: oilPrice
//* ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 
//* প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
//* প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
//* প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
//* এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।

// function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
//     const perLiterDieselPrice = 114;
//     const perLiterPetrolPrice = 130;
//     const perLiterOctanePrice = 135;

//     const totalDieselPrice = perLiterDieselPrice * dieselQuantity;
//     const totalPetrolPrice = perLiterPetrolPrice * petrolQuantity;
//     const totalOctanePrice = perLiterOctanePrice * octaneQuantity;

//     const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
//     return totalOilPrice;
// }
// const totalPrice = oilPrice(1, 1, 1);
// console.log(totalPrice)


//* Problem 4: publicBusFare
//* একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা(কতজন যাবে)  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।

//* উদাহরণ১ঃ
//* যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

//*উদাহরণ২ঃ
//* যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

function publicBusFare(peoples){
    const busCapacity = 50;
    const microBusCapacity = 11;
    const busFare = 250

    const remainingAfterBusFull = peoples % busCapacity;
    if(remainingAfterBusFull === 0){
        return remainingAfterBusFull;
    }else if(remainingAfterBusFull <= 10){
        return remainingAfterBusFull * busFare;
    }
    const remainingAfterMicroFull = remainingAfterBusFull % microBusCapacity;
    if(remainingAfterMicroFull === 0){
        return remainingAfterMicroFull;
    }
    return remainingAfterMicroFull * busFare;
}
const totalFare = publicBusFare(62);
console.log(totalFare)










//* Problem 5: isBestFriend

//* তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

// function isBestFriend(friends1, friends2) {
//     if (friends1.name === friends2.friend && friends2.name === friends1.friend) {
//         return true
//     } else {
//         return false;
//     }
// }
// const res = isBestFriend({ name: 'abul', friend: 'babul' }, { name: 'babul', friend: 'abul' })
// console.log(res)