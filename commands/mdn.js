const rp = require('request-promise');
const cheerio = require('cheerio');

exports.run = async (client, msg, args) => {
    
    // * Get rid of the 'mdn' in the arguments,
    // * join them together and URL encode them
    args.shift();
    const term = encodeURI(args.join(' '));

    // * Configure request options
    const options = {
        uri: client.config.mdn.replace('{term}', term),
        transform: (body) => {
            return cheerio.load(body);
        }
    };

    // * Make the request to MDN, sadly I can't find an API
    rp(options)
        .then(($) => {
            const title = $('.result-1 div .result-list-item h4 a').text();
            let description = $('.result-1 div .result-list-item p').text();
            const link = $('.result-1 div .result-list-item p.search-meta').text();

            let embed = client.embed();

            // * Return an error message if no results are found
            if(!title){
                embed.setColor('#e74c3c')
                    .setTitle('Whoops!')
                    .setDescription(`We can't find any results, try another term or being less specific!`);
                
                return msg.channel.send(embed);
            }

            // * Get rid of the link and whitespace at the end
            description = description.substring(0, description.indexOf(link));

            embed.setAuthor(title, msg.author.avatarURL)
                .addField('Description', `*${description}*`)
                .addField('Link', `[Link to MDN page](https://${link})`);
            
            return msg.channel.send(embed);
        })
        .catch(err => {
            console.error(err);
        })
}

exports.help = {
    name: 'mdn',
    description: 'Look up terms on the MDN website'
}