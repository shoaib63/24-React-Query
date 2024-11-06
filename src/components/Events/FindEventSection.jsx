import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../util/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';


export default function FindEventSection() {
  const searchElement = useRef();
<<<<<<< HEAD
  const [searchTerm , setSearchTerm] = useState();
=======
  const [searchTerm, setSearchTerm] = useState('');
>>>>>>> 56bcd845e3813a1b023b57094de2899cc09b0f5c


  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

<<<<<<< HEAD
  const { data, isLoading , isError , error  } = useQuery({
    queryKey: ['events' , {search: searchTerm}], 
    queryFn: ({signal}) => fetchEvents({signal, searchTerm}),
    enabled: searchTerm !== undefined,
  })

  let content =  <p>Please enter a search term and to find events.</p> ; 
  
  if(isLoading ){
    content = <LoadingIndicator /> ; 

  }

  if(isError){
    content= <ErrorBlock title="An error occurred" message={error.info?.message || "Failed to fetch events."} />
  }

  if(data){
    content= <ul className='events-list'>
      {data.map(event => <li key={event.id}><EventItem  event={event}/> </li>)}
=======
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', { search: searchTerm }],
    queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }),
  })

  let content = <p>Please enter a search term and to find events.</p>;

  if (isPending) {
    content = <LoadingIndicator />;

  }

  if (isError) {
    content: <ErrorBlock title="An error occurred" message={error.info?.message || "Failed to fetch events."} />
  }

  if (data) {
    content: <ul className='events-list'>
      {data.map(event => <li key={event.id}><EventItem event={event} /> </li>)}
>>>>>>> 56bcd845e3813a1b023b57094de2899cc09b0f5c
    </ul>
  }


  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
