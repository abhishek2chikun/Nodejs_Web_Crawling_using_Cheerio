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
                    CollageName : $(`#__next > div.jsx-539967438.page-min-height > section > div > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.px-2 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.col-9 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.listing-block-container > div:nth-child(${i+1}) > div > div.jsx-765939686.top-block.position-relative.overflow-hidden > div.jsx-765939686.clg-name-address > a > h3`).text(),
                    
                    Location : $(`#__next > div.jsx-539967438.page-min-height > section > div > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.px-2 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.col-9 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.listing-block-container > div:nth-child(${i+1}) > div > div.jsx-765939686.bottom-block.w-100.position-relative > div > span > span.jsx-765939686.mr-1`).text(),
    
                    FirstYearCollegeFees : $(`#__next > div.jsx-539967438.page-min-height > section > div > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.px-2 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.col-9 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.listing-block-container > div:nth-child(${i+1}) > div > div.jsx-765939686.bottom-block.w-100.position-relative > ul > li:nth-child(1) > a > span.jsx-765939686.lr-key.text-lg.text-primary.d-block.font-weight-bold`).text(),

                    ExamsAccepted : $(`#__next > div.jsx-539967438.page-min-height > section > div > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.px-2 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.col-9 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.listing-block-container > div:nth-child(${i+1}) > div > div.jsx-765939686.bottom-block.w-100.position-relative > ul > li:nth-child(2) > a > span.jsx-765939686.lr-key.text-lg.text-primary.d-block.font-weight-bold`).text(),
                
                    UserRating : $(`#__next > div.jsx-539967438.page-min-height > section > div > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.px-2 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.col-9 > div.jsx-1493310953.jsx-859420643.jsx-1530230182.row.listing-block-container > div:nth-child(${i+1}) > div > div.jsx-765939686.bottom-block.w-100.position-relative > ul > li:nth-child(3) > a > span.jsx-765939686.lr-key.text-lg.text-primary.d-block.font-weight-bold`).text()
                }
        o[key].push(data)
        }
        console.log(JSON.stringify(o))
    })