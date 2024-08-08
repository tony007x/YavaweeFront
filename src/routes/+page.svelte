<script lang="ts">
import Wretch from "wretch"

const click = async () =>{
    await Wretch('/api/user/hello')
    .post()
}
</script>


<div class="flex w-full h-screen justify-center">
    <button on:click={click} >Click API</button>
</div>