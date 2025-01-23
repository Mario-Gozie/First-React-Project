function Form() {
  return (
    <form action="" className="Form">
      <label htmlFor="name" required>
        Name
      </label>
      <input type="name" />
      <label htmlFor="email">Email</label>
      <input type="email" required />

      <label htmlFor="message">Message</label>
      <textarea name="message" id=""></textarea>

      <button>Send Message</button>
    </form>
  );
}

export default Form;
