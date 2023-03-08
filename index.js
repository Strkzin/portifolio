                //GET//
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host:"sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: "9194070032f86f",
        pass: "937bd8a92ba8b7"

    }
});

transporter.sendMail({
    from: "Roberto Holanda <9194070032f86f>",
    to: "rfhcholanda1@gmail.com",
    subject: "TEXTO PARA EMAIL",
    text: "eMAIL REDIRECIONADO PARA A PESSOA CERTA",
    content: "aqui jas um texto qualquer",
}).then(message =>{
    console.log(message);
}).catch(err =>{
    console.log(err);
})

           //POST// 
/*
var Imap = require('imap'),
    inspect = require('util').inspect;
var fs = require('fs'), fileStream;

var imap = new Imap({
    user: '9194070032f86f',
    password: 's937bd8a92ba8b7',
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    tls: true
    });

    function openInbox(cb) {
        imap.openBox('INBOX', true, cb);
          }
        imap.once('ready', function() {
        openInbox(function(err, box) {
        if (err) throw err;
        imap.search([ 'UNSEEN', ['SINCE', 'June 15, 2018'] ], function(err, results) {
        if (err) throw err;
        var f = imap.fetch(results, { bodies: '' });
        f.on('message', function(msg, seqno) {
        console.log('Message #%d', seqno);
        var prefix = '(#' + seqno + ') ';
        msg.on('body', function(stream, info) {
        console.log(prefix + 'Body');
        stream.pipe(fs.createWriteStream('msg-' + seqno + '-body.txt'));
        });
        msg.once('attributes', function(attrs) {
        console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
        });
        msg.once('end', function() {
        console.log(prefix + 'Finished');
        });
        });
        f.once('error', function(err) {
        console.log('Fetch error: ' + err);
        });
        f.once('end', function() {
        console.log('Done fetching all messages!');
        imap.end();});
            });
          });
        });
        imap.once('error', function(err) {
        console.log(err);
        });
        imap.once('end', function() {
        console.log('Connection ended');
        });
        imap.connect();*/
        
