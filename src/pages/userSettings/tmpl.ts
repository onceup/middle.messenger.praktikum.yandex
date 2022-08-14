const tmpl = `
<main>
    <form class="form">
        <div class="form__avatar-wrapper">
            <img src="images/img_avatar.png" id="avatar" alt="Avatar" class="profile-avatar">
        </div>
        {{{formInputFirstName}}}
        {{{formInputSecondName}}}
        {{{formInputDisplayName}}}
        {{{formInputLogin}}}
        {{{formInputEmail}}}
        {{{formInputPhone}}}
        {{{formInputOldPassword}}}
        {{{formInputNewPassword}}}
        <div class="form__button">
          <button type="submit" class="form__submit button">
          <span class="button__text">Save</span>
        </button>
        </div>
    </form>
</main>
`;

export default tmpl;
