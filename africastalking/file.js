// install africastalking library from npmjs.org
const Africastaking=require('africastalking');
// send sms using africastalking
const AT = Africastaking({ username:'infodigital', apiKey:'9cbc899009dbada0812a17f43785e2ec9c172211699d8f065645ebdebad104f0'}).SMS;
//Get your app's user name and aptkey from https://account.africastalking.com

const sendSMS = async ()=> {
    const ouput = await AT.send({
        to: ['+254758184302','+254704511445'],// phone numbers
        message: 'hello welocome to africastalking, you are registered user', // your text
        enqueue: true,
    });

    console.log({output});

};
 sendSMS();