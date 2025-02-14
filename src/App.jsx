import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import css from "./App.module.css";
import "modern-normalize/modern-normalize.css";

const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
