function RequestAnInvoice() {
  const btnRequestAnInvoice = document.querySelector('.request-an-invoice-btn');
  btnRequestAnInvoice.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the form
    const form = document.getElementById('contact-form');

    // Validate required fields
    const requiredFields = ['contact_number', 'user_name', 'user_email'];
    let isValid = true;

    requiredFields.forEach((field) => {
      const input = form.elements[field];
      if (!input.value.trim()) {
        alert(`Пожалуйста, заполните поле ${field}`);
        isValid = false;
      }
    });

    if (!isValid) return;

    // Send the form using EmailJS
    emailjs.sendForm('service_deefxek', 'template_ryqxxtg', form).then(
      (response) => {
        alert('Счет для оплаты придет на указанную почту');
        console.log('SUCCESS!', response);
        form.reset(); // Clear form after successful submission
      },
      (error) => {
        alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
        console.log('FAILED...', error);
      }
    );
  });
}

export default RequestAnInvoice;
