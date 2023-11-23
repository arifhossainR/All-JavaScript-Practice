let date = new Date();

let day = date.getDay();

switch (day) {
    case 0:
        console.log("It's Sunday\n");
        break;
    case 1:
        console.log("It's Monday\n");
        break;
    case 2:
        console.log("It's Tuesday\n");
        break;
    case 3:
        console.log("It's Wednesday\n");
        break;
    case 4:
        console.log("It's Thursday\n");
        break;
    case 5:
        console.log("It's Friday\n");
        break;
    case 6:
        console.log("It's Saturday\n");
        break;
    default:
        console.log("It's not a day\n");
        break;
}