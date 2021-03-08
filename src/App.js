import Book from "./Book";
import booksData from "../data/booksData.json"

const bookComponent = booksData.map(data => <Book title={data.title} author={data.author} />)

export default () => {

    return (
        <div>
            {bookComponent}
        </div>
    );
};