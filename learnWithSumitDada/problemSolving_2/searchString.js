let sentence = "learn with sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, learn with Sumit has all the tools you need to learn the newest and most popular techniques to convert you from a no stack to full stack developer. Learn with sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

let countSumit = sentence.match(/sumit/ig);
console.log(countSumit?countSumit.length:0);

let firstIndexOfSumit = sentence.search(/sumit/i);
console.log(firstIndexOfSumit=== -1?"not found":firstIndexOfSumit);