const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler:function(argv){
        
        notes.addNote(argv.title,argv.body);
       
    }
})

//create remove command

yargs.command({
    command:'remove',
    describe: 'Remove an existing note',
    handler: function(){
        console.log('Removing an existing note!');
    }
})

//create list command

yargs.command({
    command:'list',
    describe:'list all the notes!',
    handler: function(){
        console.log('Listing all the notes!');
    }
})

// create read command

yargs.command({
    command: 'read',
    describe: 'Read all the notes!',
    handler: function(){
        console.log('Reading all the notes!');
    }
})

yargs.parse();