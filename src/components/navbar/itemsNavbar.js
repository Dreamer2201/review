import { nanoid } from 'nanoid'

const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home"
    },
    {
        id: nanoid(),
        to: "/html",
        text: "HTML / css"
    },
    {
        id: nanoid(),
        to: "/javascript",
        text: "JS"
    },
    {
        id: nanoid(),
        to: "/react",
        text: "React"
    }
]


export default items;