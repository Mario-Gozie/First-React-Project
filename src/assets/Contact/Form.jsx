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

      <input type="submit" value="Send Message" />
    </form>
  );
}

export default Form;
