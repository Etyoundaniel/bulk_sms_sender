// install africastalking library from npmjs.org
// send sms using africastalking
const AT = Africastaking({ username:'infodigital', apikey:'9cbc899009dbada0812a17f43785e2ec9c172211699d8f065645ebdebad104f0'}).AIRTIME;
//Get your app's user name and aptkey from https://account.africastalking.com

const sendAitime = async ()=> {
    const ouput = await AT.send({
        maxNumRetry: 1,
        recipients: [
            {phoneNumber:'+254758184302', amount: 20, currencyCode: 'KES'},
            {phoneNumber:'+254758184302', amount: 20, currencyCode: 'KES'},
        ],

    });

    console.log({output});

};
CsendAitime();