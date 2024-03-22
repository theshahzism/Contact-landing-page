import React, { useState } from "react";
import styles from "./contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [text,setText]=useState('')

  const handleSubmit=(event)=>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  return (
    <div className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />}></Button>
          <Button text="VIA CALL" icon={<FaPhoneAlt />}></Button>
        </div>
        <Button  isOutline={true} text="VIA EMAIL" icon={<HiMail />}></Button>

        <form onSubmit={handleSubmit}>
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
            <textarea rows={3} name="text" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="Submit"></Button>
          </div>
          <div>
            {`Name is ${name}, Email is ${email} and Text is ${text}`}
          </div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="Contact Image" />
      </div>
    </div>
  );
};

export default ContactForm;
