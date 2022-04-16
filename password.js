console.log('Welcome to the Password Validator Tool!');

const readline = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question('What password would you like to validate? ', function (answer) {
    if (answer.length >= 10) {
        console.log('This is an acceptable password');
        console.log(`
         ______                       __                                      __        __                           
        /      \                     /  |                                    /  |      /  |                          
       /$$$$$$  |  ______    ______  $$ |        ______   __   __   __   ____$$ |      $$ |____    ______    ______  
       $$ |  $$/  /      \  /      \ $$ |       /      \ /  | /  | /  | /    $$ |      $$      \  /      \  /      \ 
       $$ |      /$$$$$$  |/$$$$$$  |$$ |      /$$$$$$  |$$ | $$ | $$ |/$$$$$$$ |      $$$$$$$  |/$$$$$$  |/$$$$$$  |
       $$ |   __ $$ |  $$ |$$ |  $$ |$$ |      $$ |  $$ |$$ | $$ | $$ |$$ |  $$ |      $$ |  $$ |$$ |  $$/ $$ |  $$ |
       $$ \__/  |$$ \__$$ |$$ \__$$ |$$ |      $$ |__$$ |$$ \_$$ \_$$ |$$ \__$$ |      $$ |__$$ |$$ |      $$ \__$$ |
       $$    $$/ $$    $$/ $$    $$/ $$ |      $$    $$/ $$   $$   $$/ $$    $$ |      $$    $$/ $$ |      $$    $$/ 
        $$$$$$/   $$$$$$/   $$$$$$/  $$/       $$$$$$$/   $$$$$/$$$$/   $$$$$$$/       $$$$$$$/  $$/        $$$$$$/  
                                               $$ |                                                                  
                                               $$ |                                                                  
                                               $$/                                                                   `);
    } else {
        console.log('This password is not long enough');
    }
})



