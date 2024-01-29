<script lang="ts">
  import SvelteTextFiled from './SvelteTextField.svelte'

  let text: string = ""
  const handleChange = (e: InputEvent) => {
    text = (e.target as HTMLInputElement).value
  }

</script>

<SvelteTextFiled text={text} on:input={handleChange} />
<p>{text}</p>