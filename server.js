var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article One | Bhushan Khanale',
    heading: 'Article One',
    date: 'July 10, 2017',
    content: 
             `<p>
                Fernando Alonso D�az About this sound audio (help�info) (born 29 July 1981) is a Spanish Formula One racing driver and a double World Champion who is currently racing for McLaren-Honda.[2] He is often regarded as one of the greatest Formula One drivers in the history of the sport.[3][4][5][6][7][8][9][10] He took part in the 2017 Indianapolis 500.[11]
            </p>
            <p>
                Born in Oviedo, the capital of the autonomous region of Asturias, Alonso started in karting from the age of 3. He won three consecutive karting championships in Spain from 1994 to 1997, and he became world karting champion in 1996. He made his Formula One debut in the 2001 season with Minardi, and then moved to the Renault team as a test driver the next year. Starting in 2003 Alonso then became one of the main drivers of the team. On 25 September 2005, he won the Formula One World Drivers' Championship title at the age of 24 years and 58 days, at the time making him the youngest Formula One World Drivers' Champion. After retaining the title the following year, Alonso also became the youngest double Champion at the time. He joined McLaren in 2007, before returning to Renault for two seasons in 2008 and 2009.
            </p>
            <p>
                For the 2010 season, he joined Scuderia Ferrari.[12][13] Although Alonso did not reach his goal of winning a third title while at Ferrari he managed to finish runner up on three occasions (2010, 2012 and 2013) as well as winning eleven Grands Prix with the team and clearly beating his teammates for points in all five seasons. His strongest title challenges were in 2010 and 2012, finishing both seasons just adrift of title winner Sebastian Vettel. He left Ferrari at the end of the 2014 season, two years prior to the original expiry of his contract.[14]
            </p>
            <p>
                Nicknamed El Nano, a typical pseudonym for Fernando in Asturias, his place of birth, Alonso acts as a Goodwill Ambassador for UNICEF.[15] Alonso also had become the youngest driver to win a pole position and Grand Prix respectively in the 2003 Malaysian Grand Prix and the 2003 Hungarian Grand Prix,[16][17] before both records were broken by Sebastian Vettel in the 2008 Italian Grand Prix.[18] With his fourth-place finish in the 2013 Japanese Grand Prix, scoring his 1,571st career point, Alonso took over the record for most championship points in his career. However, the record has once again been broken by Sebastian Vettel at the 2015 Italian Grand Prix. As of May 2017, Alonso is the only Spanish driver to have won a Formula One Grand Prix and is the driver with the sixth highest number of Grand Prix wins, with 32.[19]
            </p>`
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var date = data.date;
    var htmlTemplate = `
        <html>
        <head>
            <title>${title}</title>
             <link href="/ui/style.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <div><a href="/">Home</a></div>
            <hr/>
            <h1>${heading}</h1>
            <div id="date">
                ${date}
            </div>
            <div id="content">
                ${content};
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
