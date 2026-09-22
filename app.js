// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');


// where to find static files - css, images, js
// this needs to be uncommented so that the css file can be found and used in the layout.hbs file
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active for navigation
  state={home:true}
  // set specifics for <head>
  head={title: "StockIntro - Home"}
  // pass object to to render in "index"
  res.render('index', {state, head});
  // send this to terminal where node app is running
  console.log('home')

});

app.get('/basics', (req, res) => {
    state={basics : true}
    head={title:"StockIntro - Basics"}
    res.render('basics', { state, head});
    console.log('basics')
  });

app.get('/how-to', (req, res) => {
    state={howTo : true}
    head={title:"StockIntro - How-To"}
    res.render('how-to', { state, head});
    console.log('how-to')
  });

app.get('/concepts', (req, res) => {
    state={concepts : true}
    head={title:"StockIntro - Concepts"}
    res.render('concepts', { state, head});
    console.log('concepts')
  });

app.get('/risks', (req, res) => {
    state={risks : true}
    head={title:"StockIntro - Risks"}
    res.render('risks', { state, head});
    console.log('risks')
  });

app.get('/resources', (req, res) => {
    state={resources : true}
    head={title:"StockIntro - Resources"}
    res.render('resources', { state, head});
    console.log('resources')
  });

app.get('/about', (req, res) => {
    state={about : true}
    head={title:"StockIntro - About"}
    res.render('about', { state, head});
    console.log('about')
  });

app.get('/contact-thanks', (req, res) => {
    state={contactThanks : true}
    head={title:"StockIntro - Contact Thanks"}
    res.render('contact-thanks', { state, head});
    console.log('contact-thanks')
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});