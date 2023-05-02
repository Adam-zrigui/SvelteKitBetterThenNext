<script lang="ts">
     export let form
</script>




<form method="post" action="?/login">
<p>{form?.message || ''}</p>
<input type="text" placeholder="username" name="username" required><input name="password" type="password" placeholder="password"  required><button>login</button>
<button formaction="?/register">register</button>
</form>