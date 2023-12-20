import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import styles from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setMessage(e.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_Form}>
        <div className={styles.btn_handle}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage size={23} />} />
          <Button text="VIA CALL" icon={<IoMdCall size={23} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<IoMailSharp size={23} />}
        />
        <form onSubmit={handleOnSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea rows={9} type="text" name="text" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit" />
          </div>

          <div>{name + " " + email + " " + message}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/support.jpg" alt="contact Image" />
      </div>
    </section>
  );
};

export default ContactForm;
