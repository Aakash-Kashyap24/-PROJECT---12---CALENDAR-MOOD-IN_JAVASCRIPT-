const month = [
    "January"
    , "February"
    , "March"
    , "April"
    , "May"
    , "June"
    , "July"
    , "August"
    , "September"
    , "October"
    , "November"
    , "December"
]

let moods = Array.from(document.querySelectorAll(".mood"));
let selectedMoodName = '';
let selectedMoodColor = '';
// const dates="";
let dates;

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const colors = ["#ff0000", "#9e9e06", "#f3711a", "#360202", "#03c6f7"]
const moodNames = ["angry", "smile", "tired", "tear", "laugh"]


// const weeks = Array.from(document.querySelectorAll(".week-name"));

// weeks.forEach((value, index, array) => {
//     value.innerHTML = week[index]
// })

const Year = new Date().getFullYear();
let firstDay = new Date(`${Year} January 1`);
let endDay = new Date(`${Year} December 31`);
const dateArray = [];


function getDatesRange(startDate, endDate) {
    const date = new Date(startDate.getTime());


    while (date <= endDate) {
        dateArray.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return dateArray;

}



let dateArrays = getDatesRange(firstDay, endDay)
console.log("arr")

console.log(dateArrays)

function crateDates() {

    let calendar = document.querySelector(".calendar");


    let months;
    let weeks;
    let weeksname;


    let date;
    // monthsName.innerText = value;
    // months.appendChild(monthsName);
    // calendar.appendChild(months);
    const createMonths = () => {
        month.forEach((value, index, array) => {
            months = document.createElement("Div");
            months.classList.add("months");
            let monthsName = document.createElement("p");
            monthsName.classList.add("months-name");
            monthsName.innerText = value;
            weeks = document.createElement("Div");
            weeks.classList.add("weeks-name");

            date = document.createElement("Div");
            date.classList.add("date");

            week.forEach((value, index, array) => {
                weeksname = document.createElement("p");
                weeksname.classList.add("week-name");
                weeksname.innerText = value;

                weeks.appendChild(weeksname)


            })

            // for
            dateArrays.forEach((values, indexes, array) => {
                console.log(values);
                console.log("Months"+values.getMonth())
                let one = true;
           

                if (values.getMonth()==index) {
                    dates = document.createElement("button");
                    dates.classList.add("dates");
                    dates.innerText = `${values.getDate()}`;
                    date.appendChild(dates)
                    
                }
                else{

                }
            

            });



            months.appendChild(monthsName);
            months.appendChild(weeks);
            months.appendChild(date);
            calendar.appendChild(months);

        })

    }


    createMonths()

}





crateDates();


const removeSelected = () => {
    moods.forEach((value, index, array) => {
        value.classList.remove("selected")
    })
}




moods.forEach((value, index, array) => {
    value.addEventListener('click', () => {

        console.log(getDatesRange(firstDay, endDay))


        if (value.classList.contains("selected")) {
            removeSelected();
            // value.classList.remove("selected");
            console.log("clicked seletes")
        }
        else {
            removeSelected();

            value.classList.add("selected");
            selectedMoodName = value.classList[1];
            var map1 = new Map([
                ['a', 10],
                ['b', 20]
            ]);
            var values = map1.get('a');

            moodNames.forEach((value, index, array) => {
                if (selectedMoodName === value) {


                    selectedMoodColor = colors[index]
                }

            })

            console.log(selectedMoodName, selectedMoodColor)
        }
    })
})

let datess=Array.from(document.querySelectorAll(".dates"))

datess.forEach((value, index, array) => {
    value.addEventListener('click', () => {
        console.log(value.style.backgroundColor != `${selectedMoodColor}`)

        value.style.backgroundColor = selectedMoodColor;


    })
})

const removeAllColor = () => {
    datess.forEach((value, index, array) => {
        value.style.backgroundColor = "grey"
    })
}

let reset = Array.from(document.querySelectorAll(".side-icons"));
let randoms = reset[0];






// random NumberColors assigning to all dates


function randomColors() {
    datess.forEach((value, index, array) => {
        value.style.backgroundColor = random(colors);
    })
}


// random NumberColors generating here

function random(colors) {
    const randomNu = Math.floor(Math.random() * 3) + 1;
    const randomColor = colors[randomNu];
    return randomColor;
}

randoms.addEventListener('click', () => [


    randomColors()




])

reset[1].addEventListener('click', () => {

    removeAllColor()
})

console.log(moods)



