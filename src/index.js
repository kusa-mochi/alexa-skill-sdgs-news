'use strict';

const uuid = require('node-uuid');
const now = new Date();
const jsonDate = now.toJSON();

exports.handler = function(event, context, callback) {
    const response = [
        {
            uid: uuid.v4(),
            updateDate: jsonDate,
            titleText: "そうめん",
            mainText: "そうめんは，つるつるでおいしい",
            redirectionUrl: "https://slash-mochi.net/?p=1169#sdgs_news_list"
        },
        {
            uid: uuid.v4(),
            updateDate: jsonDate,
            titleText: "スライム",
            mainText: "スライムは，もちもちで気持ちよい",
            redirectionUrl: "https://slash-mochi.net/?p=1169#sdgs_news_list"
        }
    ];
    callback(null, response);
};
