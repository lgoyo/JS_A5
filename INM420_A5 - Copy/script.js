$(document).ready(function() {
    new Glide('#carousel', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      breakpoints: {
        768: {
          perView: 1
        },
        1024: {
          perView: 2
        }
      }
    }).mount();
    
    // Example of using Axios to load data
    axios.get('/api/items')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the items!', error);
      });
  });
  