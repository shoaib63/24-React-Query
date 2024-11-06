<<<<<<< HEAD
export async function fetchEvents({ signal, searchTerm }) {
=======
export async function fetchEvents({ signal , searchTerm }) {
  console.log('searchTerm', searchTerm);

>>>>>>> 56bcd845e3813a1b023b57094de2899cc09b0f5c
  let url = 'http://localhost:3000/events'; 
  if(searchTerm){
      url += '?search=' + searchTerm; 
  }
  
<<<<<<< HEAD
  const response = await fetch(url, { signal: signal });

=======
    const response = await fetch(url , { signal: signal});
>>>>>>> 56bcd845e3813a1b023b57094de2899cc09b0f5c
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the events');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }

    const { events } = await response.json();

    return events;
  }


  export async function createNewEvent(eventData) {
    const response = await fetch(`http://localhost:3000/events`, {
      method: 'POST',
      body: JSON.stringify(eventData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = new Error('An error occurred while creating the event');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    const { event } = await response.json();
  
    return event;
  }

  export async function fetchSelectableImages({ signal }) {
    const response = await fetch(`http://localhost:3000/events/images`, { signal });
  
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the images');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    const { images } = await response.json();
  
    return images;
  }