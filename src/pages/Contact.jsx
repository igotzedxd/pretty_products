import Header from "../components/header/Header";
import Newsletter from "../components/newsletter/Newsletter";

function Contact() {
  return (
    <div className={`page `}>
      <Header title="Contact" />
      <Newsletter contact={true} />
    </div>
  );
}

export default Contact;
