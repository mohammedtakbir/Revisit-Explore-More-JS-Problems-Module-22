//* ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

// function feetToInch(feet){
//     return feet * 12;
// }
// const inches = feetToInch(65);
// console.log(inches)


//* ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

// function centimeterToMeter(centimeters){
//     return centimeters / 100
// }
// const meters = centimeterToMeter(100);
// console.log(meters)


//* ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
//* এইবার ভালো করে খেয়াল করো। 
//* প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
//* সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
//* তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 



//* এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

//* উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

// function paperRequirements(firstBoook, secondBook, thirdBook) {
//     const firstBoookPageNeded = 100;
//     const secondBookPageNeded = 200;
//     const thirdBookPageNeeded = 300;

//     const totalFirstBookPages = firstBoook * firstBoookPageNeded;
//     const totalSecondBookPages = secondBook * secondBookPageNeded;
//     const totalThirdBookPages = thirdBook * thirdBookPageNeeded;

//     const totalPagesNeeded = totalFirstBookPages + totalSecondBookPages + totalThirdBookPages;
//     return totalPagesNeeded;
// }
// const totalPages = paperRequirements(1, 1, 2);
// console.log(totalPages)


//* ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

// function bestFriend(friends) {
//     let biggestName = ''
//     for (const friend of friends) {
//         if (friend.length > biggestName.length) {
//             biggestName = friend
//         }
//     }
//     return biggestName;
// }
// const friends = ['alam', 'balam', 'banalam', 'kalam', 'alabalakala'];
// const res = bestFriend(friends);
// console.log(res)



//* ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখsবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 


// const arr = [10, 20, 30, 40, -50, 36, -20];
// let positiveNumber = [];
// for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (num >= 0) {
//         positiveNumber.push(num)
//     } else if (num < 0) {
//         break;
//     }
// }
// console.log(positiveNumber)

