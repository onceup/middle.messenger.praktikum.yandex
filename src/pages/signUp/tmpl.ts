const tmpl = `
<main>
  <form class="form">
    <h2 class="form__title">Sign up</h2>
    {{{formInputEmail}}}
    {{{formInputLogin}}}
    {{{formInputFirstName}}}
    {{{formInputSecondName}}}
    {{{formInputPhone}}}
    {{{formInputPassword}}}
    <div class="form__button">
    <button type="submit" class="form__submit button">
      <span class="button__text"> Sign up </span>
    </button>
  </div>
    <a href="./signin">Sign in</a>
  </form>
</main>
`;

export default tmpl;
