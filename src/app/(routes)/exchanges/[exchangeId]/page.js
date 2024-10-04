import BookDetailsPage from "./BookDetailsPage";


export const metadata = {
  title: 'Book Details',
  description: 'Book Details Page',
}

const BookDetails = async({ params }) => {
 return( <div>
          <BookDetailsPage params={params}/>

    </div>)
  
};

export default BookDetails;