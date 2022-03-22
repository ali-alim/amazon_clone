const withImages = require('next-images') // delete if not working

module.exports = {
    ...withImages(),
    images:{
        domains:['links.papareact.com', 'fakestoreapi.com']
    },
    future: {
        webpack5: true,
    },
};