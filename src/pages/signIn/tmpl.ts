const tmpl = `
<main>
  <form class="form">
    <h2 class="form__title">Sign in</h2>
    {{{formInputLogin}}}
    {{{formInputPassword}}}
    <div class="form__button">
      <button type="submit" class="form__submit button">
        <span class="button__text"> Sign in </span>
      </button>
    </div>
    <a href="./signup">Sign up</a>
  </form>
</main>
`;

export default tmpl;
