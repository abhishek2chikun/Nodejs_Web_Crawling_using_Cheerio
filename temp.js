const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
	url: `http://collegedunia.com/btech/bangalore-colleges`,
    headers: {
        'User-Agent': 'Request-Promise'
      },
	json: true
}

rp(options)
	.then((data) => {
		let userData = [];

        const $ = cheerio.load(data)

        var Name = $("div[class='jsx-765939686 clg-name-address'] > a > h3").text().split(', Bangalore')
        console.log(Name)
        var Address = $("div[class='jsx-765939686 clg-head d-flex']").text().split('Karnataka')
        console.log(Address)
        var Fee = $("li[class='jsx-765939686 lr']>a[class='jsx-765939686 pointer']>span[class='jsx-765939686 lr-key text-lg text-primary d-block font-weight-bold']").text().split('₹')
        console.log(Fee)
        var x = $("#__next > div.jsx-539967438.page-min-height > section > div > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.px-2 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.col-9 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.listing-block-container > div:nth-child(1) > div > div.jsx-765939686.bottom-block.w-100.position-relative > ul > li:nth-child(1) > a > span.jsx-765939686.lr-key.text-lg.text-primary.d-block.font-weight-bold").text()
        console.log(x)
        
        }
    )
    

// rp("http://collegedunia.com/btech/bangalore-colleges",(error,response,html) =>
// {
//     console.log(response.statusCode)
//     if (!error && response.statusCode == 200)
//     {
//         const $ = cheerio.load(html)

//         const College_Name = $('jsx-765939686 text-white font-weight-bold text-md m-0')
//         console.log(College_Name.html())
//     }
// })