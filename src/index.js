'use strict';

const uuid = require('node-uuid');
const request = require('request');
const newsListUrl = 'https://slash-mochi.net/sdgs_news_list/collect_news_async';
const now = new Date();
const jsonDate = now.toJSON();

exports.handler = function (event, context, callback) {
    request.get(
        {
            url: newsListUrl,
            json: true
        },
        function (err, res, body) {
            if (err) {
                console.log('Error: ' + err.message);
                return;
            }
            // bodyにJSON形式でデータが入っている。
            const nNews = body.length;
            let response = [];
            for(let iNews = 0; (iNews < nNews) && (iNews < 10); iNews++) {
                const currentNews = body[iNews];
                response.push({
                    uid: uuid.v4(),
                    updateDate: jsonDate,
                    titleText: currentNews["title"],
                    mainText: currentNews["description"],
                    redirectionUrl: "https://slash-mochi.net/?p=1169#sdgs_news_list"
                    //hoge: body
                });
            }

            callback(null, response);
        });
    // const response = [
    //     {
    //         uid: uuid.v4(),
    //         updateDate: jsonDate,
    //         titleText: "そうめん",
    //         mainText: "そうめんは，つるつるでおいしい",
    //         redirectionUrl: "https://slash-mochi.net/?p=1169#sdgs_news_list"
    //     },
    //     {
    //         uid: uuid.v4(),
    //         updateDate: jsonDate,
    //         titleText: "スライム",
    //         mainText: "スライムは，もちもちで気持ちよい",
    //         redirectionUrl: "https://slash-mochi.net/?p=1169#sdgs_news_list"
    //     }
    // ];
    // callback(null, response);
};
