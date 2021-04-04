const date = prompt("Введите дату");
const dayOfWeek = getDayOfWeek(date);
if(isNaN(dayOfWeek)) {
    console.log("Неверный формат даты");
} else{
    console.log(dayOfWeek === 2 ? "Введенная дата - вторник": "Введенная дата не вторник");

}

function getDayOfWeek(date) {
    return new Date(date).getDay();
}