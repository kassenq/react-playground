import React, { Component } from 'react'; // import react library
import { render } from 'react-dom'; // gives us render() method

// var style = {
//     backgroundColor: 'orange',
//     color: 'white',
//     fontFamily: 'Arial'
// }

let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages":260},
    {"title": "White Teeth", "author": "Zadie Smith", "pages":480},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages":304},
];

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

const Library = ({books}) => { // rendering the book makes it a parent component
    return (
        <div>
            <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={260}/>
            <Book title="White Teeth" author="Zadie Smith" pages={480}/>
            <Book title="Cat's Cradle" author="Kurt Vonnegut" pages={304}/>
        </div>
    )
}

render(
    <Library books={bookList}/>, 
    document.getElementById('root')
)




// let skiData = {
//     total: 50,
//     powder: 20, 
//     backcountry: 10, 
//     goal: 100
// }

// const getPercent = decimal => {
//     return decimal * 100 + '%'
// }
// const calcGoalProcess = (total, goal) => {
//     return getPercent(total/goal)
// }

// const SkiDayCounter = ({total, goal, powder, backcountry}) => {
//     return (
//         <section>
//             <div>
//                 <p>Total days: {total}</p>
//             </div>
//             <div>
//                 <p>Powder days: {powder}</p>
//             </div>
//             <div>
//                 <p>Backcountry days: {backcountry}</p>
//             </div>
//             <div>
//                 <p>Goal: {calcGoalProcess(total, goal)}</p>
//             </div>
//         </section>
//     )
// }

// render(
//     <SkiDayCounter 
//         total = {skiData.total}
//         powder = {skiData.powder}
//         backcountry = {skiData.backcountry}
//         goal = {skiData.goal}/>,
//     document.getElementById('root')
// )
