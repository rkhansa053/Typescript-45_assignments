//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.

let guestlist: string[] =["Barerah","Aisha","Zaeema"];

let absentguest: string = "Barerah";

let newguest: string = "Bushra";

guestlist[0]= newguest;

for(let i=0; i<guestlist.length; i++){

    console.log("Dear "+ guestlist[i] +  ",\n\n it is our pleasure to invite you in our party.\n\n Thankyou!\n\n" )
}

console.log(`${absentguest} is not coming.`);

console.log("Good news we find big table so we invited 3 more guest");

guestlist.unshift("Aleena")
guestlist.splice(2 ,0, "Kainat" );
guestlist.push("Khansa");

for(let i=0; i<guestlist.length; i++){

    console.log("Dear "+ guestlist[i] +  ",\n\n it is our pleasure to invite you in our party.\n\n Thankyou!\n\n" )
    
};

