var jsonServer = require('json-server');

var resources = {
    catalog: [
        {
            id: 1,
            title: 'Do you want to be like Indiana?, go to Jordan',
            previewImage: '/imagen/Jordania-en-furgoneta-3228-3.jpg',
            duration: '1h:45m',
            price: 10000.00,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, atque autem deserunt eaque eveniet, expedita facere fugiat laboriosam laborum minima officiis omnis quibusdam quis repellat repudiandae tempora, tenetur. Ex, saepe.'
        },
        {
            id: 2,
            title: 'Buy a ticket to go to Indonesia',
            previewImage: '/imagen/24-dias-por-Indonesia-204-3.jpg',
            duration: '1h:33m',
            price: 12000.00,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur cupiditate dolorum error molestiae pariatur reprehenderit. Dolorem esse est fuga, illum iure iusto nam repellat repudiandae soluta tempora vel, vero.'
        },
        {
            id: 3,
            title: 'Visit Scotland, Castles and Whisky!!!!',
            previewImage: '/imagen/Escocia-en-5-dias-3309-3.jpg',
            duration: '41m:18s',
            price: 9000.00,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur dignissimos esse exercitationem harum hic illo inventore, laboriosam magnam minus obcaecati, quasi quis quod sunt suscipit vitae voluptates! Consectetur, culpa?'
        }
    ]
};

var router = jsonServer.router(resources);
var server = jsonServer.create();

server.use(router);
server.listen(3000);
