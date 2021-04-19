const rp = require('request-promise');
const cheerio = require('cheerio');

const options = 
{
	url: `http://collegedunia.com/btech/bangalore-colleges`,

    headers: 
    {
        'User-Agent': 'Request-Promise'
    },
	json: true
}

rp(options)
	.then((data) => 
    {
		let userData = [];

        const $ = cheerio.load(data)
        var o = {}
        var key ="LIST OF TOP BE/B.TECH COLLEGES IN BANGALORE BASED ON 2021 RANKING"
        o[key]=[]
        for(let i=0;i<20;i++)
        {
        var data={
            
            CollageName: $("div[class='jsx-765939686 clg-name-address'] > a > h3").text().split(', Bangalore')[i],
            
            Location : $("div[class='jsx-765939686 clg-head d-flex']").text().split('Karnataka')[i],
            
            FirstYearCollegeFees : $("a[class='jsx-765939686 pointer'] > span[class='jsx-765939686 lr-key text-lg text-primary d-block font-weight-bold']").text().split('₹  ')[1+i],
            
            ExamsAccepted : $("li:nth-child(2) > a > span.jsx-765939686.lr-key.text-lg.text-primary.d-block.font-weight-bold").text().split(' ')[i],  
           
            UserRating : $("li:nth-child(3) > a > span.jsx-765939686.lr-key.text-lg.text-primary.d-block.font-weight-bold").text().split('  ')[i],
                }
        o[key].push(data)
        }
        console.log(JSON.stringify(o))
    })
