// function findArray(numbers){
//     const arr = [];

//     for(let i= 0; i <= numbers.length; i++)
//     if(numbers[i] % 5 ==0){
//         arr.push(numbers[i]);
//     }
//     return arr;
// }

// let result = findArray([10,25,36,87,41])
// console.log(result);




                        // Filter metodundan istifadə edərək rəqəmlərdən ibarət bir array-də
                        //  yalnız 5-ə bölünən rəqəmləri ayrıca bir array-ə doldurun.


                        // const arr = [];

                        // function divide5(number) {
                        //     return number % 5 == 0;
                        // }

                        // let filtered = [15, 65, 98, 32, 14, 20, 80].filter(divide5);
                        // arr.push(filtered);
                        // alert(arr);




// Find metodundan istifadə edərək emaillərdən ibarət bir 
// array-də ilk "code.edu.az" domain-i olan emaili tapın.



// let arr  = [ "as@ali.com","nurlan@code.edu.az", "n@nihad.az" , "a@code.edu.az"];

//  email = arr.find(x => x.includes("code.edu.az"));
//  console.log(email);







                        // Map metodundan istifadə edərək array-də olan bütün rəqəmləri 2 dəfə artırın.


                        // function map2 (v, i,arr){
                        //     return v*2;
                        // }

                        // let maping2 = [15,20,36,41].map(map2);
                        // alert(maping2);









// Map metodundan istifadə edərək sözlərdən ibarət bir array-də
//  bütün sözləri tən yarıya bölərək array-i dəyişin.

// function divideWord(v,i ,arr){
//     return v.substr(0,v.length/2)
// }

// let mapingWord = ["Nurlan", "Terlan", "Nureddin","Araz"].map(divideWord)
// alert(mapingWord);




                            // Reduce metodundan istifadə edərək array-də olan rəqəmlərdən
                            //  yalnız cütləri cəmləyin.


                            // let numbers = [14, 56, 32, 801, 47, 8]

                            // function getSum(total, num) {
                            //     if (num % 2 === 0)
                            //         return total + num;
                            //     else
                            //         return total;
                            // }

                            // let result = numbers.reduce(getSum, 0);
                            // console.log(result);




// Reduce metodundan istifadə edərək array-də olan rəqəmlərdən
// 5 e qaliqsiz bolunenleri cemleyin 



// let numbers = [14, 55, 32, 801, 47, 15]

// function sumDivided5(total, num) {
//     if (num % 5 === 0)
//         return total + num;

//     return total;
// }

// let result = numbers.reduce(sumDivided5, 0)
// console.log(result);





// collBACK FUNCTION

                    function divided5(array, collBack){
                        let h = 1;
                        for(  let i = 0; i<=array.length; i++ )
                        if(collBack(array[i])){
                            h = h * array[i];
                        }
                        return h
                    }

                    function div3(numbers){
                        return numbers % 3 === 0;
                    }

                    function older( numbers){
                        return numbers > 5;
                    }

                    let result = divided5([3,2,5,8,7,10], older)
                    console.log(result);

                    result = divided5([3, 9, 85,6,16], div3)

                    console.log(result);
