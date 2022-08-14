const tmpl = `
<main>
  <div class="dialogues">
    <div class="dialogues__list">
    <h2>Dialogues</h2>
      {{{dialogueText1}}}
    </div>
    <div class="dialogues__chat">
      {{{messageText1}}}
      {{{messageText2}}}
      <form>
        {{{formInputMessage}}}
      </form>
    </div>
  </div>
</main>
`;

export default tmpl;
