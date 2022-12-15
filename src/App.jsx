import "./App.css";
import emailjs from "@emailjs/browser";

function App() {
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h2>Test EmailJs</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your name: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="message">Your message: </label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
