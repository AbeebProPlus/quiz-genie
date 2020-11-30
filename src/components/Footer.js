import React from "react";

function Footer() {
    const currentDate = new Date().getFullYear();
    return (
    <footer>
        <p>Created by dhulnurain 001</p>
        <p>Copyright &copy; {currentDate}</p>
        <a href="https://web.facebook.com/ahmad.habib.35175" target="
      _blank">facebook</a>
        <a href="https://twitter.com/ahmadhabeeb001" target="_blank">Twitter</a>
        <a href="https://www.instagram.com/ahmadhabeeb001/" target="_blank">Instagram</a>
    </footer>
    )
}

export default Footer;