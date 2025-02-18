import emailjs from "@emailjs/browser";

emailjs.init({ publicKey: "sxoBwhW9N1EGaQw86", limitRate: { throttle: 5000 } });

export const sendMessage = async (form) => {
  console.log("sending message...");
  try {
    const response = await emailjs.sendForm(
      "service_gmail",
      "template_portfolio--send",
      form
    );
    if (response.status === 200) {
      window.alert("Thanks! Message sent successfully.");
      form.reset();
    } else {
      throw new Error(`Status code: ${response.status}`);
    }
  } catch (err) {
    window.alert("Sorry! There was a problem.\nMessage not sent.");
    console.error(`Failed to send message. ${err}`);
  }
};
