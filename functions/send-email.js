const sg = require("@sendgrid/mail");
exports.handler = async function(context, event, callback) {
    sg.setApiKey(context.SENDGRID_API_KEY);
    const msg = {
      to: context.TO_EMAIL_ADDRESS,
      from: { email: context.FROM_EMAIL_ADDRESS, name: "/send-email" },
      replyTo: event.from,
      subject: `[contactform] ${event.subject}`,
      text: `New email from ${event.from}.\n\n${event.content}`,
    };
    try {
      await sg.send(msg);
      response.setStatusCode(200);
      response.setBody({ success: true });
      return callback(null, response);
    } catch (error) {
      console.error(error);
      let { message } = error;
      if (error.response) {
        console.error(error.response.body);
        message = error.response.body.errors[0];  
      }
  
      response.setStatusCode(400);
      response.setBody({ success: false, error: message }); 
      return callback(null, errorResponse(response, message));
    }
  }