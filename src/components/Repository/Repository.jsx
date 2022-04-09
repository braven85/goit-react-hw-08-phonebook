import classes from "./Repository.module.css";

export const Repository = () => {
  return (
    <>
      <a
        className={classes["repo-link"]}
        href="https://github.com/braven85/goit-react-hw-08-phonebook"
      >
        Repozytorium kodu na GitHub
      </a>
      <a
        className={classes["repo-link"]}
        href="https://braven85.github.io/goit-react-hw-08-phonebook/"
      >
        GitHub Pages
      </a>
      <a
        className={classes["repo-link"]}
        href="https://incredible-basbousa-03ef45.netlify.app/"
      >
        Netlify
      </a>
    </>
  );
};
