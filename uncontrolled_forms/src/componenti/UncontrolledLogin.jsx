export function UncontrolledLogin() {
  function onLogin(event) {
    event.preventDefault();
    const { username, password, remember } = event.target;

    const printObjData = {
      username: username.value,
      password: password.value,
      remember: remember.checked,
    };
    console.log(printObjData);
  }

  function loginWithFormData(event) {
    event.preventDefault();
    const form = event.target.closest("form");
    const formData = new FormData(form);

    const printData = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };
    console.log(printData);
  }

  return (
    <form onSubmit={onLogin}>
      <input name="username" type="text" />
      <input name="password" type="password" />
      <input type="checkbox" name="remember" />
      <button type="submit">Login</button>
      <button type="button" onClick={loginWithFormData}>
        Login with form data
      </button>
    </form>
  );
}
