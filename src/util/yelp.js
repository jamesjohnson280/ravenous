const apiKey = 'Pjo6cAudsGsZL6FnUgTAcwyFrnfRoYGLSslJ8Z6sf2sPnAEt52i9FdDaHDM9IDwxtNzIYGajZU5GDoPyqBBpF9LS6QpHShyuZSTyFWQRtgYFvEg9JnmawqcCgdxQX3Yx';

const Yelp = {
  search(term, location, sortBy) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then((response) => { return response.json(); })
    .then((jsonResponse) => {
      if (jsonResponse.businesses) {
        jsonResponse.businesses.map((business) => {
          return {
            id: business.id,
            imgSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  }
};

export default Yelp;